const { default: axios } = require("axios");
const { URL_SERVICE_MEDIA } = process.env;

module.exports = async (req, res) => {
  try {
    const id = req.params.id;
    const media = await axios.delete(`${URL_SERVICE_MEDIA}/media/${id}`);
    return res.json(media.data);
  } catch (error) {
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
