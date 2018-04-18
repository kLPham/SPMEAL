//SERVER SIDE:
///////////////////// IMPORT ALL MY MODULES  /////////////////////////////////////////////////////////////////////////+
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const massive = require('massive');

const session = require('express-session');
const axios = require('axios');

///////////////////// path is a node module that comes with node, meaning it doesn't need installed. //////////////////////
// It's used below in sending data to the browser. more here --> https://nodejs.org/api/path.html
const path = require('path');
///////////////////////////////////////////////////////////////////////////////
const port = 3001;
////////////////// CREATE MY APP ////////////////////////+
const app = express();

/////  APPLY MY MIDDLEWARE /////////////////////////////////////////////////+
app.use(json());
app.use(cors());
///////////////////////////////////////////////////////////////////////////
require('dotenv').config(); //for production

/// DATABASE:INSERT URI FROM HEROKU (DATABASE CREDENTIALS) HERE (HIDDEN IN .ENV FILE)(ADD=>  ?ssl=true to the end of connection string otherwise it won't connect )////////////////////
const connectionString = process.env.CONNECTION_STRING;

///////// USE MASSIVE TO CREATE CONNECTION TO DATABASE //////////////////////////////
// massive(process.env.CONNECTION_STRING).then(dbInstance => {
//   //SETTER & GETTER function in object oriented programing: setting a new property on my app object called db and the value is this dbinstance. & i can use my get function go get the value of the function.
//   app.set('db', dbInstance);
// });
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

const db = app.get('db'); ///use my get function go get the value of the function. ///

/////////////////////////  UNCOMMENT THIS WHEN i am ready to have project IN PRODUCTION. Final step ////////////////////////////
// app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
