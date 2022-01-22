const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await axios.put(
        `${URL_SERVICE_COURSE}/api/course/${id}`,
        req.body
      );
      res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
