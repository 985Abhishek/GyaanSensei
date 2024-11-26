const Comments = require("../models/Comments");
const Profile = require("../models/Profileform");
const User = require("../models/User");
const { getSocket } = require("../utils/Socket");

const io = getSocket();

exports.addComments = async (req, res) => {
  const { profileId } = req.params;
  const { userId, comment } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(profileId)) {
      return res.status(400).json({ message: "Invalid profileId" });
    }
    const profile = await Profile.findById(mongoose.Types.ObjectId(profileId));

    console.log(profileId, "profileId");
    if (!profile) return res.status(400).json({ message: "post not found" });

    const newComment = new Comments({ profileId, userId, comment });
    await newComment.save();

    res.status(201).json({ message: "comment added successfully", newComment });
  } catch (error) {
    console.error(error.message);
    if (io) {
      io.emit("new_comment_updated", {
        profileId,
        userId,
        action: "Commented",
      });
    }
    res.status(500).json({ message: "could not add comment" });
  }
};

///{
//   "_id": {
//     "$oid": "673d890fbb7f7ea7635299d4"
//   },
//   "username": "Stefan David",
//   "age": 32,
//   "gender": "male",
//   "skills": [
//     "Guitarist"
//   ],
//   "skillDescription": "A Person who play guitar",
//   "rating": 4,
//   "avatar": "https://res.cloudinary.com/dxiw0mfsx/image/upload/v1732086025/qmwxzffc7rbisnrpdiow.jpg",
//   "media": [
//     "https://res.cloudinary.com/dxiw0mfsx/video/upload/v1732086030/a7zm5uzbvqtq8fox84e9.mp4"
//   ],
//   "createdAt": {
//     "$date": "2024-11-20T07:00:31.263Z"
//   },
//   "updatedAt": {
//     "$date": "2024-11-20T07:00:31.263Z"
//   },
//   "__v": 0
// }

// users
// {
//   "_id": {
//     "$oid": "672aff165bbe7359c95f8602"
//   },
//   "name": "Abhishek Dhange",
//   "email": "abhishek@gmail.com",
//   "password": "$2a$10$BNEYIfvwxtFkTHaYeL/y4ubvkRYqckzvsw0xNFHJX4k0aZQsLzhXK",
//   "mobile": "111111111111",
//   "__v": 0,
//   "resetToken": "465ebcb1ad43f5dba4472dbbb50b6667589837f5ab3fb85afe9ab4f996bd07ca",
//   "resetTokenExpiration": {
//     "$date": "2024-11-06T07:33:21.537Z"
//   }
// }
