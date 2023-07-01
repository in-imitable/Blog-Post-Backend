const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
