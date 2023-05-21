const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/", userController.addUser);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUser);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.updateUser);

module.exports = router;
