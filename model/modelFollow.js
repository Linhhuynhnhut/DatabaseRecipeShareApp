const mongoose = require("mongoose");
const followSchema = new mongoose.Schema({
  // Người follow
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  // Người được follow
  followee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

let Follow = mongoose.model("Follow", followSchema);
module.exports = { Follow };
