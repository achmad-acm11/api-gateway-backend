const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");
const { URL_SERVICE_USER, SECRET_KEY_JWT, SECRET_KEY_JWT_REFRESH } =
  process.env;

module.exports = {
  login: async (req, res) => {
    try {
      const response = await axios.post(
        `${URL_SERVICE_USER}/user/login`,
        req.body
      );
      const data = response.data.data;

      const token = jwt.sign({ data: data }, SECRET_KEY_JWT, {
        expiresIn: "1h",
      });

      const refreshToken = jwt.sign({ data: data }, SECRET_KEY_JWT_REFRESH, {
        expiresIn: 60 * 10,
      });

      response.data.data = {
        token,
        refresh_token: refreshToken,
      };
      return res.json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
