const express = require('express');
const morgan = require('morgan');
const planetsRoutes = require('./routes/planets.routes');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(planetsRoutes);

module.exports = app;
