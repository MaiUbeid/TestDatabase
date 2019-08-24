const dbconnection = require('../config/connection');

exports.addCity = (info) => {
  const { name, city } = info;
  const sql = {
    text: 'INSERT INTO cities (name, city) VALUES ($1, $2)',
    values: [name, city] 
  };
  return dbconnection.query(sql);
};
