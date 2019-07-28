/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
exports.up = function (knex) {
  return knex.schema.createTable('blacklist', (tbl) => {
    tbl.increments();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    tbl
      .integer('restaurant_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('restaurants');
    tbl.timestamp('date').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('blacklist');
};
