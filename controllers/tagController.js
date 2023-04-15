const { Tag } = require("../model/model");
const tagController = {
  addTag: async (req, res) => {
    try {
      const newTag = new Tag(req.body);
      const saveTag = await newTag.save();
      res.status(200).json(saveTag);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.find();
      res.status(200).json(tags);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = tagController;
