/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');

const find = async () => {
  try {
    const restaurants = await db('restaurants AS r')
      .select('r.id', 'r.name', 'r.description', 'r.image', 'r.city')
      .count('rv.ratings AS no_of_reviews')
      .sum('rv.ratings AS sum')
      .leftJoin('reviews as rv', 'r.id', 'rv.restaurant_id')
      .groupBy('r.id');
    return restaurants.map(restaurant => ({
      ...restaurant,
      avgRating: parseInt(restaurant.sum / restaurant.no_of_reviews, 10),
    }));
  } catch (err) {
    log.info(err.message);
  }
};


const findByCity = async (user, city) => {
  try {
    const blacklist = await db('blacklist AS b').select('b.restaurant_id').where({ 'b.user_id': user });

    const blacklistRestuarants = [];

    blacklist.map(item => blacklistRestuarants.push(item.restaurant_id));

    const restaurants = await db('restaurants AS r')
      .select('r.id', 'r.name', 'r.description', 'r.image', 'r.city')
      .count('rv.ratings AS no_of_reviews')
      .sum('rv.ratings AS sum')
      .leftJoin('reviews as rv', 'r.id', 'rv.restaurant_id')
      .leftJoin('blacklist as b', 'r.id', 'b.restaurant_id')
      .groupBy('r.id')
      .where({ 'r.city': city });


    const restuarantArray = restaurants.map(restaurant => ({
      ...restaurant,
      avgRating: parseInt(restaurant.sum / restaurant.no_of_reviews, 10),
    }));


    return restuarantArray.filter(
      rest => blacklistRestuarants.includes(rest.id) === false,
    );
  } catch (err) {
    log.info(err.message);
  }
};

const findRestaurantReviews = (id) => {
  try {
    return db('reviews AS r')
      .select('r.id', 'u.firstname', 'u.lastname', 'r.ratings', 'r.reviews')
      .join('users AS u', 'r.user_id', 'u.id')
      .where({ restaurant_id: id });
  } catch (err) {
    log.info(err.message);
  }
};

const findById = async (id) => {
  try {
    const restaurant = await db('restaurants')
      .where({ id })
      .first();
    restaurant.reviews = await findRestaurantReviews(id);
    return restaurant;
  } catch (err) {
    log.info(err.message);
  }
};

const create = async (data) => {
  try {
    const [id] = await db('restaurants').insert(data);
    return findById(id);
  } catch (err) {
    log.info(err.message);
  }
};

const update = async (resId, data) => {
  try {
    return await db('restaurants')
      .where({ id: resId })
      .update(data)
      .then(count => (count > 0 ? findById(resId) : null));
  } catch (err) {
    log.info(err.message);
  }
};

const remove = (id) => {
  try {
    return db('restaurants')
      .where({ id })
      .del();
  } catch (err) {
    log.info(err.message);
  }
};

module.exports = {
  create,
  find,
  findByCity,
  findById,
  update,
  remove,
};
