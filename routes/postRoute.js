const router = require("express").Router();

const postController = require("../controllers/postController");

router.post("/", postController.addPost);

router.get("/", postController.getAllPosts);

router.get("/:id", postController.getPost);

router.delete("/:id", postController.deletePost);

router.put("/:id", postController.updatePost);

module.exports = router;
