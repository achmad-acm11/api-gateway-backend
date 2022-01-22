const express = require("express");
const router = express.Router();
const handleChapter = require("./handler/chapter");

router.get("/", handleChapter.getAll);
router.get("/:id", handleChapter.getOne);
router.post("/", handleChapter.create);
router.put("/:id", handleChapter.update);
router.delete("/:id", handleChapter.deleteChapter);

module.exports = router;
