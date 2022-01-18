const { default: axios } = require("axios");
const { URL_SERVICE_USER } = process.env;

module.exports = {
  getAll: async (req, res) => {
    try {
      const users = await axios.get(`${URL_SERVICE_USER}/user`);
      return res.json(users.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
