const express = require("express");
const router = express.Router();
const handleReview = require("./handler/review");

router.post("/", handleReview.create);
router.put("/:id", handleReview.update);
router.delete("/:id", handleReview.deleteReview);

module.exports = router;
