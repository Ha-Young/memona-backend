const mongoose = require("mongoose");
const { Schema } = mongoose;

const { pointSchema } = require("./GeoJsonSubSchemas");

const postSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  content: {
    type: String,
    default: "",
  },
  postImageUrl: {
    type: String,
    required: true,
  },
  location: {
    type: pointSchema,
    required: true,
  },
  isAnonymous: {
    type: Boolean,
    default: false,
  },
  area: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Areas",
  },
  comments: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Comments",
    }],
    default: [],
  },
  likes: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Likes",
    }],
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model("Posts", postSchema);
