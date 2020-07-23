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

methodsController.getReagents = (req, res, next) => {
  const methodID = parseInt(req.params._id);
  const queryStr = `SELECT * FROM reagents r JOIN reagents_in_methods rm ON rm.method_id = ${methodID} WHERE r._id = rm.reagent_id;`;

  db.query(queryStr)
    .then((data) => {
      res.locals.reagents = data.rows;
      return next();
    })
    .catch((err) => next(err));
};

methodsController.addReagent = (req, res, next) => {
  const mID = parseInt(req.params.mID);
  const rID = parseInt(req.params.rID);
  const queryStr = `INSERT INTO reagents_in_methods VALUES(DEFAULT, ${mID}, ${rID})`;
  db.query(queryStr).then(() => next());
};

module.exports = methodsController;
