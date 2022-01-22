const { default: axios } = require("axios");
const { URL_SERVICE_USER } = process.env;

module.exports = {
  logout: async (req, res) => {
    try {
      const id = req.user.data.id;
      const response = await axios.post(`${URL_SERVICE_USER}/user/logout`, {
        user_id: id,
      });
      return res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
