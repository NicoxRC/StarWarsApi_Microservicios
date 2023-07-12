const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`http://database:8004/Planet/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.log({ error: error.message });
  }
};
