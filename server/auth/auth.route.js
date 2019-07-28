const express = require('express');
const { register } = require('./auth.controller');

const route = express.Router();


route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Auth',
  });
});

route.post('/register', register);

module.exports = route;
