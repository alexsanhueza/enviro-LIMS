const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const methodsRouter = require('./methodsRouter.js');
const reagentsRouter = require('./reagentsRouter.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../assets/')));

app.use('/reagents', reagentsRouter);
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

app.listen(3000, () => console.log(path.join(__dirname, '../assets')));
