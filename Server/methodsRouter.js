const express = require('express');
const methodsController = require('./methodsController.js');
const methodsRouter = express.Router();

methodsRouter.get('/reagents/:_id', methodsController.getReagents, (req, res) => {
  return res.json(res.locals.reagents);
});

methodsRouter.get('/', methodsController.getMethods, (req, res) => {
  return res.json(res.locals.methods);
});

methodsRouter.post('/', methodsController.addMethod, (req, res) => {
  return res.redirect(301, '/methods');
});

methodsRouter.patch('/edit/:_id', methodsController.editMethod, (req, res) => {
  return res.redirect(303, '/methods');
});

methodsRouter.delete('/edit/:_id', methodsController.deleteMethod, (req, res) => {
  return res.redirect(303, '/methods');
});

module.exports = methodsRouter;
