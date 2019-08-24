const { Pool } = require('pg');

const options = {
  connectionString: process.env.DB_URL,
  ssl: true,
};

module.exports = new Pool(options);
