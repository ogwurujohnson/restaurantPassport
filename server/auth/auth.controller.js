const Auth = require('./auth.model');
const Util = require('./auth.utils');

const register = async (req, res) => {
  try {
    const {
      firstname, lastname, email, password,
    } = req.body;
    const credentials = {
      firstname,
      lastname,
      email,
      password: Util.hashPassword(password),
      role: 'user',
    };
    const user = await Auth.createUser(credentials);
    res.status(201).json(user);
  } catch (err) {
    const error = {
      message: err.message,
      stack: err.stack,
    };
    res.status(500).json(error);
  }
};


module.exports = {
  register,
};
