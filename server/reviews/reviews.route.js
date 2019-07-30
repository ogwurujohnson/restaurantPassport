const express = require('express');
const {
  addReview,
  removeReview,
} = require('./reviews.controller');
const { authenticate } = require('../auth/authenticate.util');
const {
  validateRestaurantId, validateReviewId, validateUserId, validateReview,
} = require('./reviews.validate');

const route = express.Router();

route.post('/:userId/:restaurantId', authenticate, validateRestaurantId, validateUserId, validateReview, addReview);
route.delete('/:id', authenticate, validateReviewId, removeReview);

module.exports = route;
