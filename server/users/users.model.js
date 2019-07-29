/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');

const find = () => {
  try {
    return db('users');
  } catch (err) {
    log.info(err.message);
  }
};

const findById = (id) => {
  try {
    return db('users')
      .where({ id })
      .first();
  } catch (err) {
    log.info(err.message);
  }
};

const update = async (userId, data) => {
  try {
    return await db('users')
      .where({ id: userId })
      .update(data)
      .then(count => (count > 0 ? findById(userId) : null));
  } catch (err) {
    log.info(err.message);
  }
};

const remove = (id) => {
  try {
    return db('users').where({ id }).del();
  } catch (err) {
    log.info(err.message);
  }
};


module.exports = {
  find,
  findById,
  update,
  remove,
};
