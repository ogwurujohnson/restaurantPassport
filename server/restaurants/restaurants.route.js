const express = require('express');
const {
  create, update, getAll, getSingle, deleteRestaurant, getAllByCity,
} = require('./restaurants.controller');
const { authenticate } = require('../auth/authenticate.util');

const route = express.Router();

route.get('/', getAll);
route.get('/passport', authenticate, getAllByCity);
route.get('/:id', getSingle);
route.post('/', authenticate, create);
route.delete('/:id', authenticate, deleteRestaurant);
route.put('/:id', authenticate, update);

module.exports = route;
