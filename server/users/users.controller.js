const User = require('./users.model');
const Util = require('./users.util');

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstname, lastname, email,
    } = req.body;
    const credentials = {
      firstname,
      lastname,
      email,
    };
    const user = await User.update(id, credentials);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.remove(id);
    res.status(200).json(Util.customErrors('deleted'));
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};


module.exports = {
  getAll,
  getSingle,
  updateUser,
  deleteUser,
};
