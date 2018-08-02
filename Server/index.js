//SERVER SIDE:
///////////////////// IMPORT ALL MY MODULES  /////////////////////////////////////////////////////////////////////////+
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

const session = require('express-session');

const axios = require('axios');

require('dotenv').config(); // //for production
///////////////////// path is a node module that comes with node, meaning it doesn't need installed. /////
/////// It's used below in sending data to the browser. more here --> https://nodejs.org/api/path.html /////////
// const path = require('path');

////////////////// CREATE EXPRESS APP ////////////////////////+
const app = express();

// app.use(session()); //

////AUTH0 HERE ///////////////////////////
const domain = process.env.DOMAIN;
const clientID = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;

////////////////STRIPE:entry point and bootstraps your Express application ////////////////

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const stripe = process.env.STRIPE_SECRET_KEY;
const configureStripe = require('stripe');
const SERVER_CONFIGS = require('../src/react-express-stripe/backend/constants/server');
const configureServer = require('../src/react-express-stripe/backend/server');
const configureRoutes = require('../src/react-express-stripe/backend/routes/index');

//Import controller:
const mealsController = require('./mealsController');

///ends:
configureServer(app);
configureRoutes(app);

//STRIPE END HERE. //////////////////////////////////////////////////////////////////////
///////  CREATE MIDDLEWARE THAT USE BODYPARSER, CORS, & SESSION: ///////////////////////
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: process.env.RESAVE,
    saveUninitialized: process.env.SAVEUNINITIALIZED
  })
);
//uncomment this when i am ready to have project in production. Final step
// app.use(express.static(`${__dirname}/../build`));

///////////////  DOTENV for PRoduction ////////////////////////////////////////////////////////////
// require('dotenv').config(); //for production

/// DATABASE:INSERT URI FROM HEROKU (DATABASE CREDENTIALS) HERE (HIDDEN IN .ENV FILE)(ADD=>  ?ssl=true to the end of connection string otherwise it won't connect )////////////////////

const connectionString = process.env.DB_CONNECTION_STRING;

///////// USE MASSIVE TO CREATE CONNECTION TO DATABASE //////////////////////////////
//   //SETTER & GETTER function in object oriented programing: setting a new property on my app object called db and the value is this dbinstance. & i can use my get function go get the value of the function.

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => app.set(`db`, dbInstance))
  .catch(console.log);

const db = app.get('db'); ///use my get function go get the value of the function. ///

/////AUTH0 USER PASSPORT & ENPOINTS HERE:
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: '/login'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get('db')
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get('db')
              .createUserByAuth([profile.id, profile.displayName])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);
passport.serializeUser(function(user, done) {
  done(null, {
    id: user.id,
    display: user.displayName,
    email: user.emails[0].value
  });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
//AUTH ENDPOINTS:
app.get(
  '/login',
  passport.authenticate('auth0', {
    successRedirect: '/me',
    failureRedirect: '/login',
    failureFlash: true
  })
);

app.get('/me', (req, res, next) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.redirect('/login');
  }
});
app.get('/logout', function(req, res) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});
//AUTH ENPOINTS ENDS:

///// /////             OTHER ENDPOINTS:      ///////////////////////////////////////////////////////////////////////

///// ALL MEALS ENDPOINTS BELOW /////////////////////////
//GET A MEAL DETAIL ENDPOINT:
app.get('/api/meal/:meals_id', (req, res, next) => {
  console.log('meal id request:', req.params.meals_id);
  req.app
    .get('db')
    .get_Meals_By_Id(req.params.meals_id)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
});
// Customize your meals DETAILS Enpoints:///
app.get('/api/customizeMeal/:meals_id', (req, res, next) => {
  console.log('meal id request:', req.params.meals_id);
  req.app
    .get('db')
    .get_Customize_Meals_By_id(req.params.meals_id)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
});

/// GET MEAL-TYPE ENDPOINT   //// ~
app.get('/api/meals/:meals_type', (req, res, next) => {
  console.log('meals_type request:', req.params.meals_type);
  req.app
    .get('db')
    .get_Meals_Type(req.params.meals_type)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
});
//////////////////////////////////////////////////////
//// GET CUSTOMIZE MEALS ENDPOINTS ///
app.get('/api/customize_meals/:meals_type', (req, res, next) => {
  console.log('customize meals_type request:', req.params.meals_type);
  req.app
    .get('db')
    .get_Customize_Meals_Type(req.params.meals_type)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
});
//GET ALL MEALS HERE from database-meals table: :)
app.get('/api/meals', (req, res, next) => {
  console.log('request for all meals:', req.params.meals);
  req.app
    .get('db')
    .get_All_Meals(req.params.meals)
    .then(responseAllMeals => {
      res.status(200).json(responseAllMeals);
    })
    .catch(console.log);
});
////////////////////////////////////////////////////////////////////
/// SHOPPING CART ENDPOINTS /////////////////////////////////////
app.post('/api/cart', (req, res) => {
  let item = req.body.item;
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart.push(item); //add item to cart
  return res.json(req.session.cart);
});

//get info of products using session to display to cart component
app.get('/api/cart', (req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  res.json(req.session.cart);
});

//update cart when REMOVE ITEMS FROM CART BACK-END :)
app.delete('/api/cart/:meals_id', (req, res) => {
  // console.log('Cart: ', req.session.cart);
  req.session.cart = req.session.cart.filter(meals => {
    if (meals.meals_id == req.params.meals_id) {
      return false;
    } else {
      return true;
    }
  });
  res.json(req.session.cart); //send back cart from session
});

///saveCart() saves our cart into the current Express session:

//SHOPPING CART END.

///CHECKOUT //
app.post('/api/charge', mealsController.redirectAfterMakeASale);
//////////////////////////////////////////////////////////////////

///// ALL USERS ENDPOINT BELOW ///////////////////////////////

// app.get('/api/users', function(req, res, next) {
//   req.app
//     .get('db')
//     .get_All_Users()
//     .then(users => {
//       res.status(200).send(users);
//     });
// });
///  POST REQUEST TO ADD USERS ENDPOINT ////////////// ///////////////////COME BACK TO THS>>
// app.post('/api/users', function(req, res, next) {
//   req.app
//     .get('db')
//     .add_Users([
//       req.body.id,
//       req.body.name,
//       req.body.email,
//       req.body.phone_numbers
//     ])
//     .then(response => {
//       res.status(200).send(response);
//     });
// });
/// DELETE USERS ENDPOINT ///////////////////////////
// app.delete('/api/users/:id', function(req, res, next) {
//   req.app
//     .get('db')
//     .delete_Users(req.params.id)
//     .then(response => {
//       res.status(200).send(response);
//     });
// });

////
/////////// DATABASE END HERE ////////////////////////////////////////////////////////////////////////////

////////////// UNCOMMENT THIS WHEN i am ready to have project IN PRODUCTION. Final step! ////////
// app.use(express.static(`${__dirname}/../build`));
const port = 3001;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
