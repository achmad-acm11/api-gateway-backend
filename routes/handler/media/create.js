const { default: axios } = require("axios");
const { URL_SERVICE_MEDIA } = process.env;

module.exports = async (req, res) => {
  try {
    const media = await axios.post(`${URL_SERVICE_MEDIA}/media`, req.body);
    return res.json(media.data);
  } catch (error) {
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
