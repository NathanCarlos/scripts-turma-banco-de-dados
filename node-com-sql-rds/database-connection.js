const knex = require('knex') ({
    client: 'mysql',
    connection: {
      host : 'database-1.cvvhk8ebkbzs.us-east-1.rds.amazonaws.com',
      user : 'admin',
      password : 'adminroot',
      database : 'letscode_class'
    }
});

module.exports = knex;