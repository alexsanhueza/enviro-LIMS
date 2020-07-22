const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodsController = require('./methodsController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/methods', methodsController.getMethods, (req, res) => {
  return res.json(res.locals.methods);
});

app.post('/methods', methodsController.addMethod, (req, res) => {
  return res.redirect('/methods');
});

app.patch('/methods/:_id', methodsController.editMethod, (req, res) => {
  return res.redirect('/methods');
});

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
