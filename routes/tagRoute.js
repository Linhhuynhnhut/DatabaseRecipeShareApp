const router = require("express").Router();

const tagController = require("../controllers/tagController");

router.post("/", tagController.addTag);

router.get("/", tagController.getAllTags);

router.get("/:id", tagController.getTag);

module.exports = router;
