const { default: axios } = require("axios");
const apiAdapter = require("../apiAdapter");
const { URL_SERVICE_MEDIA } = process.env;

module.exports = async (req, res) => {
  try {
    const media = await axios.get(`${URL_SERVICE_MEDIA}/media`);
    return res.json(media.data);
  } catch (error) {
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
