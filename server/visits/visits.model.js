/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');

const add = (data) => {
  try {
    return db('visited').insert(data);
  } catch (err) {
    log.info(err.message);
  }
};

const remove = (id) => {
  try {
    return db('visited')
      .where({ id })
      .del();
  } catch (err) {
    log.info(err.message);
  }
};

const findBy = (filter) => {
  try {
    return db('visited')
      .where(filter)
      .first();
  } catch (err) {
    log.info(err.message);
  }
};

const getVisited = async (id) => {
  try {
    const visits = await db('visited AS v')
      .select('r.id', 'r.name', 'r.description', 'v.has_visited')
      .join('restaurants AS r', 'v.restaurant_id', 'r.id')
      .where({ 'v.user_id': id });
    return visits.map(visit => ({
      ...visit,
      has_visited: !!visit.has_visited,
    }));
  } catch (err) {
    log.info(err.message);
  }
};

module.exports = {
  add,
  remove,
  getVisited,
  findBy,
};
