const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.status(200).send('Hello world!');
});

module.exports = {
  run: () => app.listen(3000),
  app
};
