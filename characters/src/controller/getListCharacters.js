const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('http://database:8004/Character');
    res.status(200).send(response.data);
  } catch (error) {
    console.log({ error: error.message });
  }
};
