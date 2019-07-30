const express = require('express');
const { addToBlackList, removeFromBlackList, getusersBlackList } = require('./blacklist.controller');
const { authenticate } = require('../auth/authenticate.util');
const { validateRestaurantId, validateUserId, validateBlackListId } = require('./blacklist.validate');

const route = express.Router();

route.post('/:userId/:restaurantId', authenticate, validateRestaurantId, validateUserId, addToBlackList);
route.delete('/:id', authenticate, validateBlackListId, removeFromBlackList);
route.get('/:userId', authenticate, validateUserId, getusersBlackList);

module.exports = route;
