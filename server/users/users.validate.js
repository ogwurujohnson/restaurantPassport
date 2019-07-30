const User = require('../users/users.model');

async function validateUserId(req, res, next) {
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
  const user = await User.findById(integerNum);
  if (user) {
    return next();
  }
  return res.status(404).json({
    status: 404,
    error: 'User not found',
  });
}

function validateUser(req, res, next) {
  const { body } = req;
  const status = Object.keys(body).length === 0 && body.constructor === Object;
  if (status) {
    return res.status(400).json({
      status: 400,
      message: 'missing project data',
    });
  }
  if (
    !body.firstname
    || !body.lastname
    || !body.email
    || !body.city
  ) {
    return res.status(400).json({
      status: 400,
      message: 'missing required fields, check documentation for guidance',
    });
  }
  return next();
}


module.exports = {
  validateUserId,
  validateUser,
};
