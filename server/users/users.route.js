const express = require('express');
const {
  deleteUser, updateUser, getAll, getSingle,
} = require('./users.controller');

const route = express.Router();

route.get('/', getAll);

route.get('/:id', getSingle);
route.put('/:id', updateUser);
route.delete('/:id', deleteUser);

module.exports = route;
