const dbconnection = require('../config/connection');

exports.addCity = (info) => {
  const { user_name, city } = info;
  const sql = {
    text: 'INSERT INTO cities (user_name, city) VALUES ($1, $2)',
    values: [user_name, city] 
  };
  return dbconnection.query(sql);
};
