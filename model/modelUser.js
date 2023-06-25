const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nameUser: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

let User = mongoose.model("User", userSchema);
module.exports = { User };
