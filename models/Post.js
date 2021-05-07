const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  content: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Area",
  },
  comments: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }],
    default: [],
  },
  like: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    }],
    default: [],
  },
});

module.exports = mongoose.model("Post", postSchema);
