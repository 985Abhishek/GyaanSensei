const profiles = require("../models/Profileform");
const Likes = require("../models/Likes");
const { getSocket } = require("../utils/Socket");

const io = getSocket();

exports.toggleLike = async (req, res) => {
  const { profileId } = req.params;
  const { userId } = req.body;

  try {
    //checking if post exists
    if (!userId || !profileId) {
      return res.status(400).json({ message: "userId and profileId are required" });
    }
    const profile = await profiles.findById(profileId);
    if (!profile) return res.status(400).json({ message: "Post not found" });
    //checking if user has already liked the post
    const existingLike = await Likes.findOne({ profileId, userId });
    if (existingLike) {
      await Likes.deleteOne({ profileId, userId });
      await profiles.findByIdAndUpdate(profileId, { $inc: { likesCount: -1 } });

      return res.status(200).json({ message: "Like removed" });
    } else {
      const newLike = new Likes({ profileId, userId });
      await newLike.save();
      await profiles.findByIdAndUpdate(profileId, { $inc: { likesCount: 1 } });

      if (io) {
        io.emit("new_like_updated", { profileId, userId, action: "liked" });
      }
      return res.status(200).json({ message: "Like added" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
