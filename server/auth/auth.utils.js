require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'never';

const hashPassword = password => bcrypt.hashSync(password, 12);

const comparePassword = (plain, hased) => bcrypt.compareSync(plain, hased);

const unAuthorizedMessage = {
  message: 'Username or password mismatch',
};

const generateToken = (userData) => {
  const payload = {
    sub: userData.id,
  };
  const options = {
    expiresIn: '24h',
  };
  return jwt.sign(payload, secret, options);
};

module.exports = {
  hashPassword,
  comparePassword,
  unAuthorizedMessage,
  generateToken,
};
