const mongoose = require("mongoose");
const followingSchema = new mongoose.Schema({
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

let Following = mongoose.model("Following", followingSchema);
module.exports = { Following };
