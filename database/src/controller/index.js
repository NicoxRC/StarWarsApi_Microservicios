const { getFilm, listFilm } = require('./films');
const { getPlanet, listPlanet } = require('./planets');
const { getCharacter, listCharacter } = require('./characters');

module.exports = {
  getCharacter,
  listCharacter,
  getFilm,
  listFilm,
  getPlanet,
  listPlanet,
  notFound: require('./notFound'),
};
