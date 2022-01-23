const { default: axios } = require("axios");
const jwt = require("jsonwebtoken");
const { URL_SERVICE_USER, SECRET_KEY_JWT_REFRESH, SECRET_KEY_JWT } =
  process.env;

module.exports = {
  create: async (req, res) => {
    try {
      const { email, refresh_token } = req.body;

      if (!email || !refresh_token) {
        return res.status(400).json({
          meta: {
            message: "Bad request",
            status: "error",
            code: 400,
          },
          data: {
            message: "Invalid Token",
          },
        });
      }

      await axios.get(`${URL_SERVICE_USER}/refresh-token`, {
        params: { refresh_token: refresh_token },
      });

      jwt.verify(refresh_token, SECRET_KEY_JWT_REFRESH, (err, decoded) => {
        if (err) {
          return res.status(400).json({
            meta: {
              message: "Forbidden",
              status: "error",
              code: 403,
            },
            data: {
              message: err.message,
            },
          });
        }

        if (email !== decoded.data.email) {
          return res.status(400).json({
            meta: {
              message: "Bad request",
              status: "error",
              code: 400,
            },
            data: {
              message: "Email not valid",
            },
          });
        }

        const token = jwt.sign({ data: decoded.data }, SECRET_KEY_JWT, {
          expiresIn: "1h",
        });

        return res.json({
          meta: {
            message: "Success Refresh Token",
            status: "success",
            code: 200,
          },
          data: {
            token,
          },
        });
      });
    } catch (error) {
      const { status, data } = error.response;
      return res.status(status).json(data);
    }
  },
};
