const express = require("express");
const router = express.Router();
const handleImage = require("./handler/image");

router.post("/", handleImage.create);
router.delete("/:id", handleImage.deleteImage);

module.exports = router;
