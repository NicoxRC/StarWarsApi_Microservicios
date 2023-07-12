const store = require('../connection');

module.exports = async (req, res) => {
  try {
    const { model, id } = req.params;
    // const response = await store[model].get(id);
    res.status(200).send("response");
  } catch (error) {
    console.log({ error: error.message });
  }
};
