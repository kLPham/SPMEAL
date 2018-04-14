//SERVER SIDE:
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');

require('dotenv').config(); //for production

const port = 3001;

const app = express();

const connectionString = process.env.CONNECTION_STRING;

///////////////////////////////// CONNECTION TO DATABASE /////////////////////////////////////////////////////////////////////
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

app.use(json());
app.use(cors());

//////////////// END /////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////  uncomment this when i am ready to have project in production. Final step ////////////////////////////
app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
