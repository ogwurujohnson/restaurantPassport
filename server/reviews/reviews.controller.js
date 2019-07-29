const Review = require('./reviews.model');
const Util = require('./reviews.util');

const addReview = async (req, res) => {
  try {
    const { userId, restaurantId } = req.params;
    const { ratings, reviews } = req.body;
    const review = await Review.findBy({
      user_id: userId,
      restaurant_id: restaurantId,
    });
    if (review) {
      res
        .status(409)
        .json(Util.customErrors('restaurant', 'failed, existing record'));
    } else {
      const data = {
        user_id: userId,
        restaurant_id: restaurantId,
        ratings,
        reviews,
      };
      await Review.add(data);
      res.status(201).json(Util.customErrors('restaurant', 'successfully'));
    }
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};


const removeReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.remove(id);
    res
      .status(201)
      .json(Util.customErrors('restaurant, removed', 'successfully'));
  } catch (err) {
    res.status(500).json(Util.serverErrors(err));
  }
};

module.exports = {
  addReview,
  removeReview,
};
