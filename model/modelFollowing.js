const mongoose = require("mongoose");
const followingSchema = new mongoose.Schema({
  // Người follow
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // Người được follow
  followee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

let Following = mongoose.model("Following", followingSchema);
module.exports = { Following };
