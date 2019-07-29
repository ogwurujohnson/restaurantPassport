const express = require('express');
const { addToBlackList, removeFromBlackList, getusersBlackList } = require('./blacklist.controller');

const route = express.Router();

route.post('/:userId/:restaurantId', addToBlackList);
route.delete('/:id', removeFromBlackList);
route.get('/:userId', getusersBlackList);

module.exports = route;
