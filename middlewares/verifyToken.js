const jwt = require("jsonwebtoken");
const { SECRET_KEY_JWT } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, SECRET_KEY_JWT, function (err, decoded) {
    if (err) {
      const data = {
        meta: {
          message: "Forbidden",
          status: "error",
          code: 403,
        },
        message: err.message,
      };
      return res.status(403).json(data);
    }

    req.user = decoded;
    return next();
  });
};
