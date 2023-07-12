const store = require('../connection');

module.exports = async (req, res) => {
  try {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
  }
};
