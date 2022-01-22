const { default: axios } = require("axios");
const { URL_SERVICE_COURSE } = process.env;

module.exports = {
  deleteMentor: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await axios.delete(
        `${URL_SERVICE_COURSE}/api/mentor/${id}`
      );
      res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  },
};
