const express = require("express");
const router = express.Router();
const handleLesson = require("./handler/lesson");

router.get("/", handleLesson.getAll);

module.exports = router;
