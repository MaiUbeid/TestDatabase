const { Pool } = require('pg');

let dbURL = '';
if(process.env.NODE_ENV == "production"){
  dbURL = process.env.DATABASE_URL;
} else{
  dbURL = process.env.DB_URL;
}

const options = {
  connectionString: dbURL,
  ssl: true,
};

module.exports = new Pool(options);
