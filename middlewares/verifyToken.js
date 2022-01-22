const jwt = require("jsonwebtoken");
const { SECRET_KEY_JWT } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, SECRET_KEY_JWT, function (err, decoded) {
    if (err) {
      return res.status(403).json({ message: err.message });
    }

    req.user = decoded;
    return next();
  });
};
