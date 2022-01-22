const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  create: async (req, res) => {
    try {
      const response = await axios.post(
        `${URL_SERVICE_COURSE}/api/chapter`,
        req.body
      );
      res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
