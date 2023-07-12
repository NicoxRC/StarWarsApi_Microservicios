const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('http://database:8004/Film');
    res.status(200).json(response.data);
  } catch (error) {
    console.log({ error: error.message });
  }
};
