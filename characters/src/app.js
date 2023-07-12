const express = require('express');
const morgan = require('morgan');
const charactersRoutes = require('./routes/characters.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(charactersRoutes);

module.exports = app;
