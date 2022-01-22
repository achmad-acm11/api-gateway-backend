const express = require("express");
const router = express.Router();
const handleCourse = require("./handler/course");

router.get("/", handleCourse.getAll);
router.get("/:id", handleCourse.getOne);
router.post("/", handleCourse.create);
router.put("/:id", handleCourse.update);
router.delete("/:id", handleCourse.deleteCourse);

module.exports = router;
