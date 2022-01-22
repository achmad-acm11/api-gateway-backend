const express = require("express");
const router = express.Router();
const handleMyCourse = require("./handler/my_course");

router.get("/", handleMyCourse.getAll);
router.post("/", handleMyCourse.create);

module.exports = router;
