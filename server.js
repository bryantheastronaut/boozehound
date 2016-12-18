'use strict';

// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const secrets = require('./config/secrets');
const User = require('./model/user');

// Configure
const app = express();
const API_PORT = process.env.API_PORT || 5101;
// Connect to the database
mongoose.connect(secrets.dbUrl);

// Set up middlewares and stuff
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// Routes -- pull this out into its own file eventually

// Create test case where a user is added to DB
app.post('/createUser', (req, res) => {
  let newUser = new User();
  newUser.local.email = req.body.email;
  newUser.local.password = req.body.password;
  newUser.save(err => {
    if (err) throw err;
    else console.log('user nade')
  });
  res.json({user : newUser, message : 'User was created'});
});

app.get('/', (req, res) => {
  res.json({message : 'Hello this is the API!'})
});

// Start server
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
