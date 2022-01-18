const { default: axios } = require("axios");
const { URL_SERVICE_USER } = process.env;

module.exports = {
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const response = await axios.put(
        `${URL_SERVICE_USER}/user/${id}`,
        req.body
      );
      return res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
