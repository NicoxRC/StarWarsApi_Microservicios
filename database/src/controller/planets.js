const store = require('../connection');

const getPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await store.Planet.get(id);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};

const listPlanet = async (req, res) => {
  try {
    const response = await store.Planet.list();
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = {
  getPlanet,
  listPlanet,
};
