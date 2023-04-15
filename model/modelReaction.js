const mongoose = require("mongoose");
const reactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

let Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = { Reaction };
