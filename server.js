'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const API_PORT = process.env.API_PORT || 5101;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({message: 'Hello this is the API!'})
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
