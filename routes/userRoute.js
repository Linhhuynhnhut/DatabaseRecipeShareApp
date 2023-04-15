const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/", userController.addUser);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUser);

module.exports = router;
