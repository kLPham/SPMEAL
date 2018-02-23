//SERVER SIDE:
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const axios = require('axios');

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
