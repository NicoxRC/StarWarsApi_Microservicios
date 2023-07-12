const express = require('express');
const morgan = require('morgan');
const filmsRoutes = require('./routes/films.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(filmsRoutes);

module.exports = app;
