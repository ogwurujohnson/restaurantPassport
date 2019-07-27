/* eslint-disable consistent-return */
const log = require('../utils').winston;
const db = require('../database/dbConfig');


const find = () => {
  try {
    return db('restaurants');
  } catch (err) {
    log.info(err.message);
  }
};

const findById = (id) => {
  try {
    return db('restaurants')
      .where({ id })
      .first();
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
  findById,
  update,
  remove,
};
