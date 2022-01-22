const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const mentors = await axios.get(`${URL_SERVICE_COURSE}/api/mentor`);
      res.json(mentors.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
