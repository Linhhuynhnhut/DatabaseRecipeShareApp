const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nameUser: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
});

let User = mongoose.model("User", userSchema);
module.exports = { User };
