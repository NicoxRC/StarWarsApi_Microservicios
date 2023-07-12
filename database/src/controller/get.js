const store = require('../connection');

module.exports = async (req, res) => {
  try {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};
