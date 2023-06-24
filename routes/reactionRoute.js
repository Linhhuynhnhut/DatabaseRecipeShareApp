const router = require("express").Router();

const reactionController = require("../controllers/reactionController");

router.post("/", reactionController.addReaction);

router.get("/", reactionController.getAllReactions);

router.get("/:id", reactionController.getReaction);

router.put("/:id", reactionController.updateReaction);

router.delete("/:id", reactionController.deleteReaction);

module.exports = router;
