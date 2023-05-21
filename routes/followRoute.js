const router = require("express").Router();

const followController = require("../controllers/followController");

router.post("/", followController.addFollow);

router.get("/", followController.getAllFollows);

router.get("/:id", followController.getFollow);

router.delete("/:id", followController.deleteFollow);

module.exports = router;
