const { getAll } = require("./getAll");
const { getOne } = require("./getOne");
const { login } = require("./login");
const { logout } = require("./logout");
const { register } = require("./register");
const { update } = require("./update");
module.exports = {
  getAll,
  getOne,
  login,
  logout,
  register,
  update,
};
