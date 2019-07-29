const express = require('express');
const {
  addToVisited,
  getusersVisited,
  removeFromvisited,
} = require('./visit.controller');

const route = express.Router();

route.post('/:userId/:restaurantId', addToVisited);
route.delete('/:id', removeFromvisited);
route.get('/:userId', getusersVisited);

module.exports = route;
