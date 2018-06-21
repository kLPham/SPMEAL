//SERVER SIDE:
///////////////////// IMPORT ALL MY MODULES  /////////////////////////////////////////////////////////////////////////+
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');
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

///// /////             ENDPOINTS:      ///////////////////////////////////////////////////////////////////////

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
// Customize DETAILS
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
app.get('/api/cart', (req, res) => {
  return res.json(req.session.cart);
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
  // req.session.cart.splice(index, 1);
  res.json(req.session.cart); //send back cart from session
});

///saveCart() saves our cart into the current Express session:

//SHOPPING CART END.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////// DATABASE END HERE ////////////////////////////////////////////////////////////////////////////

////////////// UNCOMMENT THIS WHEN i am ready to have project IN PRODUCTION. Final step! ////////
// app.use(express.static(`${__dirname}/../build`));
const port = 3001;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
