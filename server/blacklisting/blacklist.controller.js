const BlackList = require('./blacklist.model');
const Util = require('./blacklist.util');

const addToBlackList = async (req, res) => {
  try {
    const { userId, restaurantId } = req.params;
    const blacklist = await BlackList.findBy({
      user_id: userId,
      restaurant_id: restaurantId,
    });
    if (blacklist) {
      res.status(409).json(Util.customErrors('restaurant', 'failed, existing record'));
    } else {
      const data = {
        user_id: userId,
        restaurant_id: restaurantId,
      };
      await BlackList.add(data);
      res.status(201).json(Util.customErrors('restaurant', 'successfully'));
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const getusersBlackList = async (req, res) => {
  try {
    const { userId } = req.params;
    const list = await BlackList.getBlacklist(userId);
    if (list && list.length !== 0) {
      res.status(200).json(list);
    } else {
      res.status(404).json(Util.notFoundError);
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

const removeFromBlackList = async (req, res) => {
  try {
    const { id } = req.params;
    await BlackList.remove(id);
    res
      .status(200)
      .json(Util.customErrors('restaurant, removed', 'successfully'));
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

module.exports = {
  addToBlackList,
  getusersBlackList,
  removeFromBlackList,
};
