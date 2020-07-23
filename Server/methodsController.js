const db = require('../models/methodsModel.js');

const methodsController = {};

methodsController.getMethods = (req, res, next) => {
  const queryStr = `SELECT * FROM "public"."methods"`;

  db.query(queryStr)
    .then((data) => {
      res.locals.methods = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

methodsController.addMethod = (req, res, next) => {
  const { epa_method, instrumentation, method_description, extraction_solvent, department } = req.body;
  const queryStr = `INSERT INTO methods VALUES(
      DEFAULT, '${epa_method}', '${instrumentation}', 
      '${method_description}', '${extraction_solvent}', 
      '${department}');`;

  db.query(queryStr)
    .then((data) => {
      return next();
    })
    .catch((err) => next(err));
};

methodsController.editMethod = (req, res, next) => {
  const methodID = parseInt(req.params._id);
  let queryStr = '';

  for (let i = 0; i < Object.keys(req.body).length; i++) {
    let key = Object.keys(req.body)[i];
    let val = Object.values(req.body)[i];
    queryStr += ` UPDATE methods SET ${key} = '${val}' WHERE _id=${methodID};`;
  }
  db.query(queryStr)
    .then(() => next())
    .catch((err) => next(err));
};

methodsController.deleteMethod = (req, res, next) => {
  const methodID = parseInt(req.params._id);
  const queryStr = `DELETE FROM methods WHERE _id=${methodID};`;

  db.query(queryStr)
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = methodsController;
