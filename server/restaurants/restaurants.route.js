const express = require('express');
const {
  create, update, getAll, getSingle, deleteRestaurant, getAllByCity,
} = require('./restaurants.controller');
const { authenticate } = require('../auth/authenticate.util');
const { validateRestaurant, validateRestaurantId } = require('./restaurant.validate');

const route = express.Router();

route.get('/', getAll);
route.get('/passport', authenticate, getAllByCity);
route.get('/:id', validateRestaurantId, getSingle);
route.post('/', validateRestaurant, authenticate, create);
route.delete('/:id', validateRestaurantId, authenticate, deleteRestaurant);
route.put('/:id', validateRestaurant, validateRestaurantId, authenticate, update);

module.exports = route;
