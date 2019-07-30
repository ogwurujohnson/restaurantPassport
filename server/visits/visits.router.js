const express = require('express');
const {
  addToVisited,
  getusersVisited,
  removeFromvisited,
} = require('./visit.controller');
const { authenticate } = require('../auth/authenticate.util');

const route = express.Router();

route.post('/:userId/:restaurantId', authenticate, addToVisited);
route.delete('/:id', authenticate, removeFromvisited);
route.get('/:userId', authenticate, getusersVisited);

module.exports = route;
