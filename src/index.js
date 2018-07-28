const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.redirect('/ping');
});

app.get('/ping', (req, res) => {
  res.status(200).json({ ping: 'Hello world!' });
});

module.exports = app.listen(3000);
