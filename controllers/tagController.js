const { Tag } = require("../model/modelTag");
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

  getTag: async (req, res) => {
    try {
      const tag = await Tag.findById(req.params.id);
      res.status(200).json(tag);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // deleteTag: async (req, res) => {
  //   try {
  //     await Tag.findByIdAndDelete(req.params.id);
  //     res.status(200);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // },

  // updateTag: async (req, res) => {
  //   try {
  //     const tag = await Tag.findById(req.params.id);
  //     await tag.updateOne({ $set: req.body });
  //     res.status(200);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // },
};

module.exports = tagController;
