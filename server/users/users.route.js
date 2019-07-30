const express = require('express');
const {
  deleteUser, updateUser, getAll, getSingle,
} = require('./users.controller');
const { authenticate } = require('../auth/authenticate.util');

const route = express.Router();

route.get('/', getAll);

route.get('/:id', getSingle);
route.put('/:id', authenticate, updateUser);
route.delete('/:id', authenticate, deleteUser);

module.exports = route;
