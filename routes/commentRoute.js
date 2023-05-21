const router = require("express").Router();

const commentController = require("../controllers/commentController");

router.post("/", commentController.addComment);

router.get("/", commentController.getAllComments);

router.get("/:id", commentController.getComment);

router.delete("/:id", commentController.deleteComment);

router.put("/:id", commentController.updateComment);

module.exports = router;
