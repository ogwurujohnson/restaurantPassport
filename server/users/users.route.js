const express = require('express');
const {
  deleteUser, updateUser, getAll, getSingle,
} = require('./users.controller');
const { authenticate } = require('../auth/authenticate.util');
const { validateUserId, validateUser } = require('./users.validate');

const route = express.Router();

route.get('/', getAll);

route.get('/:id', validateUserId, getSingle);
route.put('/:id', authenticate, validateUser, validateUserId, updateUser);
route.delete('/:id', authenticate, validateUserId, deleteUser);

module.exports = route;
