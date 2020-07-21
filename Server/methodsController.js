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
  console.log(req.body);
  return next();
};

module.exports = methodsController;
