const store = require('../connection');

const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await store.Character.get(id);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};

const listCharacter = async (req, res) => {
  try {
    const response = await store.Character.list();
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = {
  getCharacter,
  listCharacter,
};
