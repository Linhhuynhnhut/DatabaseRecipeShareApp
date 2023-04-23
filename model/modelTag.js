const mongoose = require("mongoose");
const tagSchema = new mongoose.Schema({
  nameTag: {
    type: String,
    required: true,
    unique: true,
  },
});

let Tag = mongoose.model("Tag", tagSchema);
module.exports = { Tag };
