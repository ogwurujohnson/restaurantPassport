const express = require('express');
const {
  create, update, getAll, getSingle, deleteRestaurant,
} = require('./restaurants.controller');

const route = express.Router();

route.get('/', getAll);
route.get('/:id', getSingle);
route.post('/', create);
route.delete('/:id', deleteRestaurant);
route.put('/:id', update);

module.exports = route;
