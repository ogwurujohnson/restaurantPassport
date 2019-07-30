const express = require('express');
const {
  addToVisited,
  getusersVisited,
  removeFromvisited,
} = require('./visit.controller');
const { authenticate } = require('../auth/authenticate.util');
const { validateRestaurantId, validateUserId, validateVisitId } = require('./visits.validate');

const route = express.Router();

route.post('/:userId/:restaurantId', authenticate, validateRestaurantId, validateUserId, addToVisited);
route.delete('/:id', authenticate, validateVisitId, removeFromvisited);
route.get('/:userId', authenticate, validateUserId, getusersVisited);

module.exports = route;
