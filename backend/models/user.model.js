const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], required: true },
    avatar: {
      type: String,
      default: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
    },
    verified: { type: Boolean, default: false },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
