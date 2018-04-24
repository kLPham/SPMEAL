//SERVER SIDE:
///////////////////// IMPORT ALL MY MODULES  /////////////////////////////////////////////////////////////////////////+
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');

const session = require('express-session');
const axios = require('axios');

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

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance))
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

///// ENDPOINT: GET ONLY ONE ITEM FOR DETAIL PAGE   ////
app.get('/api/meals/:meal_id', (req, res, next) => {
  console.log('meal_id request:', req.params.meal_id);
  req.app
    .get('db')
    .getAMeal(req.params.meal_id)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(console.log);
});
//////////////////////////////////////////////////////
//GET MEALS TYPE from database-meals table: :)
app.get('/api/meals/:meal_type', (req, res, next) => {
  console.log('meal_type request:', req.params.meal_type);
  req.app
    .get('db')
    .getMeals(req.params.meal_type)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(console.log);
});
/////////// DATABASE END HERE //////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////  UNCOMMENT THIS WHEN i am ready to have project IN PRODUCTION. Final step! ////////////////////////////
// app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
