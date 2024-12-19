const mongoose = require("mongoose");

const LikesSchema = new mongoose.Schema(
  {
    profileID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: "true",

    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
       required: "true",
    },
  },
  {
    timeStamps: true,
  }
);
const Likes = mongoose.model("Likes", LikesSchema);
module.exports = Likes;
