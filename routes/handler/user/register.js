const { default: axios } = require("axios");
const { URL_SERVICE_USER } = process.env;

module.exports = {
  register: async (req, res) => {
    try {
      const response = await axios.post(
        `${URL_SERVICE_USER}/user/register`,
        req.body
      );
      return res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
