const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/index');

const connection = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: connection.model(
    'Character',
    require('../schemas/characterSchema')
  ),

  Film: connection.model('Film', require('../schemas/filmSchema')),

  Planet: connection.model('Planet', require('../schemas/planetSchema')),
};
