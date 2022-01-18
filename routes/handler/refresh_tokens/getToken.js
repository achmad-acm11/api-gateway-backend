const { default: axios } = require("axios");
const { URL_SERVICE_USER } = process.env;

module.exports = {
  getToken: async (req, res) => {
    try {
      const response = await axios.get(`${URL_SERVICE_USER}/refresh-token`);
      return res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
