/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
exports.up = function (knex) {
  return knex.schema.createTable('restaurants', (tbl) => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('description').nullable();
    tbl.string('image').notNullable();
    tbl.string('city').notNullable();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('restaurants');
};
