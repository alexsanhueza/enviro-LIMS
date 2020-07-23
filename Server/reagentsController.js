const db = require('../models/methodsModel.js');

const reagentsController = {};

reagentsController.getReagents = (req, res, next) => {
  const queryStr = `SELECT * FROM reagents;`;
  db.query(queryStr)
    .then((data) => {
      res.locals.reag = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

reagentsController.addReagent = (req, res, next) => {
  const { name, type, cas_number } = req.body;
  const queryStr = `INSERT INTO reagents VALUES (
    DEFAULT, '${name}', '${type}', '${cas_number}');`;

  db.query(queryStr)
    .then((data) => next())
    .catch((err) => next(err));
};

reagentsController.editReagent = (req, res, next) => {
  const reagentID = parseInt(req.params._id);
  let queryStr = '';

  for (let i = 0; i < Object.keys(req.body).length; i++) {
    let key = Object.keys(req.body)[i];
    let val = Object.values(req.body)[i];
    queryStr += `UPDATE reagents SET ${key} = '${val}' WHERE _id=${reagentID};`;
  }
  db.query(queryStr)
    .then(() => next())
    .catch((err) => next(err));
};
module.exports = reagentsController;
