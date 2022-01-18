const { default: axios } = require("axios");
const { URL_SERVICE_USER } = process.env;

module.exports = {
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const users = await axios.get(`${URL_SERVICE_USER}/user/${id}`);
      return res.json(users.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
