const express = require('express');
const { register, login } = require('./auth.controller');

const route = express.Router();


route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Auth Module',
  });
});

route.post('/register', register);
route.post('/login', login);

module.exports = route;
