const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.get('/api', (req, res) => {
  console.log("kkkkk");
  res.sendFile(path.resolve('./pages/index.html'));
});

module.exports = app;
