const Restaurant = require('./restaurants.model');
const Util = require('./restaurants.util');

const create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const restaurantData = {
      name,
      description,
    };
    const restaurant = await Restaurant.create(restaurantData);
    if (restaurant) {
      res.status(201).json(restaurant);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const getAll = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    if (restaurants && restaurants.length !== 0) {
      res.status(200).json(restaurants);
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
    const restaurant = await Restaurant.findById(id);
    if (restaurant) {
      res.status(200).json(restaurant);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const restaurantData = {
      name,
      description,
    };
    const restaurant = await Restaurant.update(id, restaurantData);
    if (restaurant) {
      res.status(200).json(restaurant);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    await Restaurant.remove(id);
    res.status(200).json(Util.customErrors('deleted'));
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};


module.exports = {
  create,
  getAll,
  getSingle,
  update,
  deleteRestaurant,
};
