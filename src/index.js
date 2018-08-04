const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routers');

const app = express();

app.use(bodyParser.json());

app.use('/', routers.status);
app.use('/notes', routers.notes);

module.exports = app;
