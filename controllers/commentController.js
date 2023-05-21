const { Comment } = require("../model/modelComment");
const commentController = {
  addComment: async (req, res) => {
    try {
      const newComment = new Comment(req.body);
      const saveComment = await newComment.save();
      res.status(200).json(saveComment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllComments: async (req, res) => {
    try {
      const cmts = await Comment.find();
      res.status(200).json(cmts);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getComment: async (req, res) => {
    try {
      const cmt = await Comment.findById(req.params.id);
      res.status(200).json(cmt);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateComment: async (req, res) => {
    try {
      const cmt = await Comment.findById(req.params.id);
      await cmt.updateOne({ $set: req.body });
      res.status(200).json(cmt);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = commentController;
