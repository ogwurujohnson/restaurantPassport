const express = require('express');
const {
  addReview,
  removeReview,
} = require('./reviews.controller');
const { authenticate } = require('../auth/authenticate.util');

const route = express.Router();

route.post('/:userId/:restaurantId', authenticate, addReview);
route.delete('/:id', authenticate, removeReview);

module.exports = route;
