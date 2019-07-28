/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.string('firstname', 128).notNullable();
    tbl.string('lastname', 128).notNullable();
    tbl.string('email', 255).unique().notNullable();
    tbl.string('password').notNullable();
    tbl.string('role').notNullable();
    tbl.timestamp('joined_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
