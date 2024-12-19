// const profiles = require("../models/Profileform");
// const Likes = require("../models/Likes");
// const { getSocket } = require("../utils/Socket");
// const mongoose = require("mongoose");

// const io = getSocket();

// exports.toggleLike = async (req, res) => {
//   const { profileId } = req.params;
//   const { userId } = req.body;

//   try {

//     if (!userId || !profileId) {
//       return res.status(400).json({ message: "userId and profileId are required" });
//     }

//     // Convert profileId and userId to ObjectId
//     const objectIdProfile = new mongoose.Types.ObjectId(profileId);
//     const objectIdUser = new mongoose.Types.ObjectId(userId);

//     console.log("Converted profileId:", objectIdProfile);


//     console.log("userId:", userId, "profileId:", profileId);

//     const profile = await profiles.findById(objectIdProfile);
//     if (!profile) return res.status(400).json({ message: "Post not found" });

//     const existingLike = await Likes.findOne({ profileId, objectIdUser });
//     if (existingLike) {
//       await Likes.deleteOne({ profileId, userId });
//       await profiles.findByIdAndUpdate(profileId, { $inc: { likesCount: -1 } });

//       return res.status(200).json({ message: "Like removed" });
//     } else {
//       const newLike = new Likes({ profileId, userId });
//       await newLike.save();
//       await profiles.findByIdAndUpdate(profileId, { $inc: { likesCount: 1 } });

//       if (io) {
//         io.emit("new_like_updated", { profileId, userId, action: "liked" });
//       }
//       return res.status(200).json({ message: "Like added" });
//     }
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ message: "Server error" });
//   }
// };









const profiles = require("../models/Profileform");
const Likes = require("../models/Likes");
const { getSocket } = require("../utils/Socket");
const mongoose = require("mongoose");

const io = getSocket();

exports.toggleLike = async (req, res) => {
  const { profileId } = req.params;
  const { userId } = req.body;

  try {
    // Check if userId and profileId are provided
    if (!userId || !profileId) {
      return res.status(400).json({ message: "userId and profileId are required" });
    }

    // Convert profileId and userId to ObjectId
    const objectIdProfile = new mongoose.Types.ObjectId(profileId);  // Convert to ObjectId
    const objectIdUser = new mongoose.Types.ObjectId(userId);  // Convert to ObjectId

    console.log("Converted profileId:", objectIdProfile);
    console.log("Converted userId:", objectIdUser);

    // Find profile by profileId (converted to ObjectId)
    const profile = await profiles.findById(objectIdProfile);
    if (!profile) {
      return res.status(400).json({ message: "Post not found" });
    }

    // Check if the user has already liked the profile
    const existingLike = await Likes.findOne({ profileID: objectIdProfile, userID: objectIdUser });
    if (existingLike) {
      // If the like exists, remove it
      await Likes.deleteOne({ profileID: objectIdProfile, userID: objectIdUser });
      await profiles.findByIdAndUpdate(objectIdProfile, { $inc: { likesCount: -1 } });

      return res.status(200).json({ message: "Like removed" });
    } else {
      // If no like exists, add a new like
      const newLike = new Likes({ profileID: objectIdProfile, userID: objectIdUser });
      await newLike.save();
      await profiles.findByIdAndUpdate(objectIdProfile, { $inc: { likesCount: 1 } });

      // Emit the like update to all clients via socket
      if (io) {
        io.emit("new_like_updated", { profileId: objectIdProfile, userId: objectIdUser, action: "liked" });
      }

      return res.status(200).json({ message: "Like added" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

