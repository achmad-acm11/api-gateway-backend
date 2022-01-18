const express = require("express");
const router = express.Router();
const handleRefreshToken = require("./handler/refresh_tokens");

router.get("/", handleRefreshToken.getToken);
router.post("/", handleRefreshToken.create);

module.exports = router;
