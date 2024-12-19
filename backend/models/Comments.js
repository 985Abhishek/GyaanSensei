const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema(
  {
    comment: { type: String },
    profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: "true",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "true",
    },
  },
  { timeStamps: true }
);
const Comment = mongoose.model("Comment", CommentsSchema);
module.exports=Comment;
