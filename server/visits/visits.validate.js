const Visits = require('./visits.model');
const User = require('../users/users.model');
const Restaurant = require('../restaurants/restaurants.model');

async function validateVisitId(req, res, next) {
  const { id } = req.params;
  // checkout parseInt vs Number
  const integerNum = Number(id);
  if (
    !integerNum
    || typeof integerNum !== 'number'
    || Math.sign(integerNum === -1)
  ) {
    return res.status(400).json({
      status: 400,
      error: 'Please provide a valid id query parameter',
    });
  }
  const visit = await Visits.findById(integerNum);
  if (visit) {
    return next();
  }
  return res.status(404).json({
    status: 404,
    error: 'Visit not found',
  });
}

async function validateUserId(req, res, next) {
  const { userId } = req.params;
  // checkout parseInt vs Number
  const integerNum = Number(userId);
  if (
    !integerNum
    || typeof integerNum !== 'number'
    || Math.sign(integerNum === -1)
  ) {
    return res.status(400).json({
      status: 400,
      error: 'Please provide a valid id query parameter',
    });
  }
  const user = await User.findById(integerNum);
  if (user) {
    return next();
  }
  return res.status(404).json({
    status: 404,
    error: 'User not found',
  });
}

async function validateRestaurantId(req, res, next) {
  const { restaurantId } = req.params;
  // checkout parseInt vs Number
  const integerNum = Number(restaurantId);
  if (
    !integerNum
    || typeof integerNum !== 'number'
    || Math.sign(integerNum === -1)
  ) {
    return res.status(400).json({
      status: 400,
      error: 'Please provide a valid id query parameter',
    });
  }
  const restaurant = await Restaurant.findById(integerNum);
  if (restaurant) {
    return next();
  }
  return res.status(404).json({
    status: 404,
    error: 'Restaurant not found',
  });
}

module.exports = {
  validateVisitId,
  validateRestaurantId,
  validateUserId,
};
