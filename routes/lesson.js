const express = require("express");
const router = express.Router();
const handleLesson = require("./handler/lesson");

router.get("/", handleLesson.getAll);
router.get("/:id", handleLesson.getOne);
router.post("/", handleLesson.create);
router.put("/:id", handleLesson.update);
router.delete("/:id", handleLesson.deleteLesson);

module.exports = router;
