const knex = require('knex') ({
  client: 'sqlite3',
  connection: {
    filename: "./lets_code_class.sqlite"
  }
});

module.exports = knex;