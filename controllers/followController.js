const { Follow } = require("../model/modelFollow");
const followController = {
  addFollow: async (req, res) => {
    try {
      const newFollow = new Follow(req.body);
      const saveFollow = await newFollow.save();
      res.status(200).json(saveFollow);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllFollows: async (req, res) => {
    try {
      const follows = await Follow.find();
      res.status(200).json(follows);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getFollow: async (req, res) => {
    try {
      const follow = await Follow.findById(req.params.id);
      res.status(200).json(follow);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteFollow: async (req, res) => {
    try {
      await Follow.findByIdAndDelete(req.params.id);
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = followController;
