const dbconnection = require('../config/connection');

exports.getCities = () => {
  const sql = 'SELECT * FROM cities;';
  return dbconnection.query(sql);
};
