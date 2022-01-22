const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();
const handlerUser = require("./handler/user");

router.get("/", handlerUser.getAll);
router.get("/:id", handlerUser.getOne);
router.post("/login", handlerUser.login);
router.post("/logout", verifyToken, handlerUser.logout);
router.post("/register", handlerUser.register);
router.put("/:id", handlerUser.update);

module.exports = router;