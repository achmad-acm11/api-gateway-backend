const { getAll } = require("./getAll");
const { getOne } = require("./getOne");
const { create } = require("./create");
const { update } = require("./update");
const { deleteLesson } = require("./delete");

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteLesson,
};
