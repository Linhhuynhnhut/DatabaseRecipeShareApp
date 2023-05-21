const { User } = require("../model/modelUser");
const { Post } = require("../model/modelPost");
const userController = {
  addUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
