const express = require('express');
const { addToBlackList, removeFromBlackList, getusersBlackList } = require('./blacklist.controller');
const { authenticate } = require('../auth/authenticate.util');

const route = express.Router();

route.post('/:userId/:restaurantId', authenticate, addToBlackList);
route.delete('/:id', authenticate, removeFromBlackList);
route.get('/:userId', authenticate, getusersBlackList);

module.exports = route;
