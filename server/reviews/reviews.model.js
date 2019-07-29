/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');

const add = (data) => {
  try {
    return db('reviews').insert(data);
  } catch (err) {
    log.info(err.message);
  }
};

const remove = (id) => {
  try {
    return db('reviews')
      .where({ id })
      .del();
  } catch (err) {
    log.info(err.message);
  }
};

const findBy = (filter) => {
  try {
    return db('reviews')
      .where(filter)
      .first();
  } catch (err) {
    log.info(err.message);
  }
};


module.exports = {
  add,
  remove,
  findBy,
};
