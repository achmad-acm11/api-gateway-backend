const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const lesson = await axios.get(`${URL_SERVICE_COURSE}/api/lesson/${id}`);
      res.json(lesson.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
