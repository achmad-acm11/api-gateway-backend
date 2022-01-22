const express = require("express");
const router = express.Router();
const handleMentor = require("./handler/mentor");

router.get("/", handleMentor.getAll);
router.get("/:id", handleMentor.getOne);
router.post("/", handleMentor.create);
router.put("/:id", handleMentor.update);
router.delete("/:id", handleMentor.deleteMentor);

module.exports = router;
