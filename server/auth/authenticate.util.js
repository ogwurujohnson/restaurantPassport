require('dotenv').config();
const jwt = require('jsonwebtoken');
const Util = require('./auth.utils');

const secret = process.env.JWT_SECRET || 'never';

const authenticate = (req, res, next) => {
  const token = req.get('Authorization') || req.header('Authorization');
  if (token) {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, secret, (err, decoded) => {
      if (err) return res.status(401).json(err.message);

      req.decoded = decoded;

      next();
    });
  } else {
    res.status(401).json(Util.unAuthorizedMessage);
  }
};

module.exports = {
  authenticate,
};
