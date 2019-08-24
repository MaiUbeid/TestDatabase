const { getCities } = require('../database/queries/getCities');
const { addCity } = require('../database/queries/addCity');

exports.getData = (req, res) => {
  getCities()
    .then((result) => res.json(result.rows))
    .catch((err) => console.log(err));
};

exports.postData = (req, res) => {
  const info = req.body;
  addCity(info)
    .then(() => res.redirect('/'))
    .catch((err) => console.log(err));
};
