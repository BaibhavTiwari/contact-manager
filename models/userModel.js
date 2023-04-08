const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add the name"],
  },
  email: {
    type: String,
    required: [true, "Please add the email address"],
    required: [true, "Email already exists"],
  },
  password: {
    type: String,
    required: [true, "Please add the password"],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema);