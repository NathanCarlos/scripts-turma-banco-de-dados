const knex = require('knex') ({
  client: 'sqlite3',
  connection: {
    filename: "./lets_code.sqlite"
  }
});

module.exports = knex;