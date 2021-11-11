const knex = require('knex') ({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'root',
      database : 'lets_code_class'
    }
});

module.exports = knex;