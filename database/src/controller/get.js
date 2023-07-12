const store = require('../connection');
const { Character } = require('../connection/index');

module.exports = async (req, res) => {
  try {
    const { model, id } = req.params;
    const response = await Character.get(id);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};
