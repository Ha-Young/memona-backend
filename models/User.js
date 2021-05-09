const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
  avatar: {
    type: String,
  },
  posts: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Post",
    }],
    default: [],
  },
  friends: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "User",
    }],
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);
