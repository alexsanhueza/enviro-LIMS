const express = require('express');
const reagentsController = require('./reagentsController.js');
const reagentsRouter = express.Router();

reagentsRouter.get('/', reagentsController.getReagents, (req, res) => {
  return res.json(res.locals.reag);
});

module.exports = reagentsRouter;
