/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');


const add = (data) => {
  try {
    return db('blacklist').insert(data);
  } catch (err) {
    log.info(err.message);
  }
};

const findById = (id) => {
  try {
    return db('blacklist')
      .where({ id })
      .first();
  } catch (err) {
    log.info(err.message);
  }
};

const remove = (id) => {
  try {
    return db('blacklist').where({ id }).del();
  } catch (err) {
    log.info(err.message);
  }
};

const findBy = (filter) => {
  try {
    return db('blacklist')
      .where(filter)
      .first();
  } catch (err) {
    log.info(err.message);
  }
};

const getBlacklist = (id) => {
  try {
    return db('blacklist AS b').select('r.id', 'r.name', 'r.description').join('restaurants AS r', 'b.restaurant_id', 'r.id').where({ 'b.user_id': id });
  } catch (err) {
    log.info(err.message);
  }
};

module.exports = {
  add,
  remove,
  getBlacklist,
  findBy,
  findById,
};
