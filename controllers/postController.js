const { Post } = require("../model/modelPost");
const postController = {
  addPost: async (req, res) => {
    try {
      const newPost = new Post(req.body);
      const savePost = await newPost.save();
      res.status(200).json(savePost);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      // xóa những gì liên quan đến post ở các model khác
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deletePost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      await post.updateOne({ $set: req.body });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = postController;
