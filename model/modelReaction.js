const mongoose = require("mongoose");
const reactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

let Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = { Reaction };
