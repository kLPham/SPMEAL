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
const port = 3001;
////////////////// CREATE MY APP ////////////////////////+
const app = express();

/////  APPLY MY MIDDLEWARE   /////////////////////////////////////////////////+
app.use(json());
app.use(cors());
///////////////  DOTENV for PRoduction ////////////////////////////////////////////////////////////
// require('dotenv').config(); //for production

/// DATABASE:INSERT URI FROM HEROKU (DATABASE CREDENTIALS) HERE (HIDDEN IN .ENV FILE)(ADD=>  ?ssl=true to the end of connection string otherwise it won't connect )////////////////////

const connectionString = process.env.DB_CONNECTION_STRING;

///////// USE MASSIVE TO CREATE CONNECTION TO DATABASE //////////////////////////////
// massive(process.env.CONNECTION_STRING).then(dbInstance => {
//   //SETTER & GETTER function in object oriented programing: setting a new property on my app object called db and the value is this dbinstance. & i can use my get function go get the value of the function.
//   app.set('db', dbInstance);
// });
// massive(process.env.DB_CONNECTION_STRING)
//   .then(db => app.set('db', db))
//   .catch(console.log);

///TESTING MASSSIVE
// massive(process.env.DB_CONNECTION_STRING).then(db => {
//   app.set(`db`, db);
// });
massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => app.set(`db`, dbInstance))
  .catch(console.log);

const db = app.get('db'); ///use my get function go get the value of the function. ///

////  TEST TO SEE IF WE GET INFO FROM DB  /////////////////
// app.get("/api/test", (req, res, next) => {
//   res.status(200).send({
//     message: 'it worked'
// });

app.get('/api/me', function(req, res) {
  if (!req.user) return res.status(401).send();
  res.status(200).json(req.user);
});

///// /////             ENDPOINTS:      ///////////////////////////////////////////////////////////////////////
//// GET MEAL TYPE ENDPOINT   ////
app.get('/api/meals/:meals_type', (req, res, next) => {
  console.log('meals_type request:', req.params.meals_type);
  req.app
    .get('db')
    .get_Meals(req.params.meals_type)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
});

//////////////////////////////////////////////////////
//GET MEALS TYPE from database-meals table: :)
// app.get('/api/meals', (req, res, next) => {
//   console.log('meals request:', req.params.meals);
//   req.app
//     .get('db')
//     .get_Meals(req.params.meals)
//     .then(response => {
//       res.status(200).json(response);
//     })
//     .catch(console.log);
// });
/// GET ALL MEALS FROM DATABASE ENDPOINT ////////////
app.get('/api/meals', function(req, res, next) {
  req.app
    .get('db')
    .get_Meals()
    .then(meals => {
      res.status(200).send(meals);
    });
});
/// GET USERS ENDPOINT ///////////////////////////////
app.get('/api/users', function(req, res, next) {
  req.app
    .get('db')
    .get_All_Users()
    .then(users => {
      res.status(200).send(users);
    });
});
///  POST REQUEST TO ADD USERS ENDPOINT //////////////
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
/////////// DATABASE END HERE //////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////  UNCOMMENT THIS WHEN i am ready to have project IN PRODUCTION. Final step! ////////////////////////////
// app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
