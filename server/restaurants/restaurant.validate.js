const Restaurant = require('./restaurants.model');

async function validateRestaurantId(req, res, next) {
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
  const restaurant = await Restaurant.findById(integerNum);
  if (restaurant) {
    return next();
  }
  return res.status(404).json({
    status: 404,
    error: 'Restaurant not found',
  });
}


function validateRestaurant(req, res, next) {
  const { body } = req;
  const status = Object.keys(body).length === 0 && body.constructor === Object;
  if (status) {
    return res.status(400).json({
      status: 400,
      message: 'missing project data',
    });
  }
  if (!body.name || !body.description || !body.image || !body.city) {
    return res.status(400).json({
      status: 400,
      message: 'missing required fields, check documentation for guidance',
    });
  }
  return next();
}

module.exports = {
  validateRestaurantId,
  validateRestaurant,
};
