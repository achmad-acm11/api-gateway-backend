const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  getAll: async (req, res) => {
    try {
      const chapters = await axios.get(`${URL_SERVICE_COURSE}/api/chapter`);
      res.json(chapters.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
