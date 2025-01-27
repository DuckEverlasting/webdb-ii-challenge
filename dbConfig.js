const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/lambda.db3'
  },
};

const db = knex(knexConfig);

module.exports = db