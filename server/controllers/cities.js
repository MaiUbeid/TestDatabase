const { getCities } = require('../database/queries/getCities');

exports.getData = (req, res) => {
  getCities()
    .then((result) => res.json(result.rows))
    .catch((err) => console.log(err));
};
