const Blacklist = require('./blacklist.model');

async function validateBlackListId(req, res, next) {
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
  const project = await Blacklist.findById(integerNum);
  if (project) {
    return next();
  }
  return res.status(404).json({
    status: 404,
    error: 'Blacklist not found',
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
  return next();
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
  return next();
}


module.exports = {
  validateBlackListId,
  validateRestaurantId,
  validateUserId,
};
