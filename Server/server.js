const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (res, req) => {
  req.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(3000, () => console.log("You're in the freakin Matrix boi"));
