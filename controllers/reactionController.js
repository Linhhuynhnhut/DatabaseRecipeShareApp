const { Reaction } = require("../model/modelReaction");
const reactionController = {
  addReaction: async (req, res) => {
    try {
      const newReaction = new Reaction(req.body);
      const saveReaction = await newReaction.save();
      res.status(200).json(saveReaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllReactions: async (req, res) => {
    try {
      const reactions = await Reaction.find();
      res.status(200).json(reactions);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getReaction: async (req, res) => {
    try {
      const reaction = await Reaction.findById(req.params.id);
      res.status(200).json(reaction);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteReaction: async (req, res) => {
    try {
      await Reaction.findByIdAndDelete(req.params.id);
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateReaction: async (req, res) => {
    try {
      const reaction = await Reaction.findById(req.params.id);
      await reaction.updateOne({ $set: req.body });
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = reactionController;
