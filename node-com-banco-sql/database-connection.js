const knex = require('knex') ({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'lets_code_class'
    }
});

module.exports = knex;