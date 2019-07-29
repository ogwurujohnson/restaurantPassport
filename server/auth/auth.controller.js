const Auth = require('./auth.model');
const Util = require('./auth.utils');

const register = async (req, res) => {
  try {
    const {
      firstname, lastname, email, password, city,
    } = req.body;
    const credentials = {
      firstname,
      lastname,
      email,
      password: Util.hashPassword(password),
      city: city.toLowerCase(),
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const credentials = {
      email,
      password,
    };
    const user = await Auth.findBy({ email: credentials.email });
    if (user && Util.comparePassword(credentials.password, user.password)) {
      const token = Util.generateToken(user);
      res.status(200).json({
        user,
        token,
      });
    } else {
      res.status(403).json(Util.unAuthorizedMessage);
    }
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
  login,
};
