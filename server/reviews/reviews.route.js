const express = require('express');
const {
  addReview,
  removeReview,
} = require('./reviews.controller');

const route = express.Router();

route.post('/:userId/:restaurantId', addReview);
route.delete('/:id', removeReview);

module.exports = route;
