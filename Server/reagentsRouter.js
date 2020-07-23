const express = require('express');
const reagentsController = require('./reagentsController.js');
const reagentsRouter = express.Router();

reagentsRouter.get('/', reagentsController.getReagents, (req, res) => {
  return res.json(res.locals.reag);
});

reagentsRouter.post('/', reagentsController.addReagent, (req, res) => {
  return res.redirect(301, '/reagents');
});

reagentsRouter.patch('/edit/:_id', reagentsController.editReagent, (req, res) => {
  return res.redirect(303, '/reagents');
});

reagentsRouter.delete('/edit/:_id', reagentsController.deleteReagent, (req, res) => {
  return res.redirect(303, '/reagents');
});

module.exports = reagentsRouter;
