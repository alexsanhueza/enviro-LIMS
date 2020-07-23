const db = require('../models/methodsModel.js');

const reagentsController = {};

reagentsController.getReagents = (req, res, next) => {
  const queryStr = `SELECT * FROM reagents;`;
  db.query(queryStr)
    .then((data) => {
      res.locals.reag = data.rows;
      //   console.log(res.locals.reagents);
      return next();
    })
    .catch((err) => next(err));
};

module.exports = reagentsController;
