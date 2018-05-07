//SERVER SIDE:
///////////////////// IMPORT ALL MY MODULES  /////////////////////////////////////////////////////////////////////////+
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');

const session = require('express-session');
const axios = require('axios');

require('dotenv').config(); //FIX THIS LATER
///////////////////// path is a node module that comes with node, meaning it doesn't need installed. //////////////////////
/////// It's used below in sending data to the browser. more here --> https://nodejs.org/api/path.html ///////////////////
// const path = require('path');
///////////////////////////////////////////////////////////////////////////////

////////////////// CREATE MY APP ////////////////////////+
const app = express();
// app.use(session()); //
/////  APPLY MY MIDDLEWARE   /////////////////////////////////////////////////+
app.use(json());
app.use(cors());

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
/// GET MEALS THAT HAS BEEN ADDED TO CART & DISPLAY IT TO CART COMP:
app.get('/api/cart', (req, res) => {
  console.log(cart);
  return res.json(req.session.cart);
});

/// STORE/POST SHOPPING CART DATA TO DB USING SESSION:
app.post('/api/cart', (req, res) => {
  let eachItem = req.body.eachItem;
  // eachItem.push(eachItem); //add it to our list
  // res.send(eachItem); ///then send it back
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart.push(eachItem); // add each meal to our cart
  return res.json(req.session.cart);
});

///saveCart() saves our cart into the current Express session:
// saveCart(request) {
//   if(request.session) {
//       request.session.cart = this.data;
//   }
// }

///// ALL USERS ENDPOINT BELOW ///////////////////////////////
// app.get('/api/me', function(req, res) {
//   if (!req.user) return res.status(401).send();
//   res.status(200).json(req.user);
// });
/// GET USERS ENDPOINT ///////////////////////////////
app.get('/api/users', function(req, res, next) {
  req.app
    .get('db')
    .get_All_Users()
    .then(users => {
      res.status(200).send(users);
    });
});
///  POST REQUEST TO ADD USERS ENDPOINT ////////////// ///////////////////COME BACK TO THS>>
app.post('/api/users', function(req, res, next) {
  req.app
    .get('db')
    .add_Users([
      req.body.id,
      req.body.name,
      req.body.email,
      req.body.phone_numbers
    ])
    .then(response => {
      res.status(200).send(response);
    });
});
/// DELETE USERS ENDPOINT ///////////////////////////
app.delete('/api/users/:id', function(req, res, next) {
  req.app
    .get('db')
    .delete_Users(req.params.id)
    .then(response => {
      res.status(200).send(response);
    });
});
/////////// DATABASE END HERE ////////////////////////////////////////////////////////////////////////////

////////////// UNCOMMENT THIS WHEN i am ready to have project IN PRODUCTION. Final step! ////////
// app.use(express.static(`${__dirname}/../build`));
const port = 3001;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
