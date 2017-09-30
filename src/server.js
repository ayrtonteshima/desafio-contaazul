const express = require('express');
const { fleetsRoute } = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(fleetsRoute);

module.exports = app;