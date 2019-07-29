const Visited = require('./visits.model');
const Util = require('./visits.util');

const addToVisited = async (req, res) => {
  try {
    const { userId, restaurantId } = req.params;
    const visit = await Visited.findBy({
      user_id: userId,
      restaurant_id: restaurantId,
    });
    if (visit) {
      res
        .status(409)
        .json(Util.customErrors('restaurant', 'failed, existing record'));
    } else {
      const data = {
        user_id: userId,
        restaurant_id: restaurantId,
        has_visited: true,
      };
      await Visited.add(data);
      res.status(201).json(Util.customErrors('restaurant', 'successfully'));
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const getusersVisited = async (req, res) => {
  try {
    const { userId } = req.params;
    const list = await Visited.getVisited(userId);
    if (list && list.length !== 0) {
      res.status(200).json(list);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const removeFromvisited = async (req, res) => {
  try {
    const { id } = req.params;
    await Visited.remove(id);
    res
      .status(201)
      .json(Util.customErrors('restaurant, removed', 'successfully'));
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

module.exports = {
  addToVisited,
  getusersVisited,
  removeFromvisited,
};
