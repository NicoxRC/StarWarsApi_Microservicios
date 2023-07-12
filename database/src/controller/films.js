const store = require('../connection');

const getFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await store.Film.get(id);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};

const listFilm = async (req, res) => {
  try {
    const response = await store.Film.list();
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = {
  getFilm,
  listFilm,
};
