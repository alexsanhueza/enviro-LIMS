const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodsController = require('./methodsController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** METHODS ROUTER **/
const methodsRouter = express.Router();

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
  // return res.json('method updated');
});

app.use('/methods', methodsRouter);

/** SERVE STATIC ASSETS IN PRODUCTION MODE ONLY **/
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (res, req) => {
    req.sendFile(path.resolve(__dirname, '../index.html'));
  });
}

/** GLOBAL ERROR HANDLER **/
app.use('*', (req, res, next) => {
  return res.status(404).json('Error: page not found');
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(3000, () => console.log("You're in the freakin Matrix boi"));
