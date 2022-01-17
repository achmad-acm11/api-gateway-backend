var express = require("express");
var router = express.Router();

const mediaHandler = require("./handler/media");

/* Routes Media listing. */
router.get("/", mediaHandler.getAll);
router.post("/", mediaHandler.create);
router.delete("/:id", mediaHandler.destroy);
module.exports = router;
