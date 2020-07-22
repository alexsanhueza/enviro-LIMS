const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodsController = require('./methodsController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const methodsRouter = express.Router();

methodsRouter.get('/', methodsController.getMethods, (req, res) => {
  return res.json(res.locals.methods);
});

methodsRouter.post('/', methodsController.addMethod, (req, res) => {
  return res.redirect('/methods');
});

methodsRouter.patch('/:_id', methodsController.editMethod, (req, res) => {
  return res.redirect('/methods');
});

methodsRouter.delete('/:_id', methodsController.deleteMethod, (req, res) => {
  return res.redirect('/methods');
});

app.use('/methods', methodsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));

  app.get('/', (res, req) => {
    req.sendFile(path.resolve(__dirname, '../index.html'));
  });
}

app.use((err, req, res, next) => {
  res.status(500).json('Something went wrong on the server');
});

app.listen(3000, () => console.log("You're in the freakin Matrix boi"));
