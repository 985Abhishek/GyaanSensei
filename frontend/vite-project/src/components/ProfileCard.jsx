import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Box,
  Divider,
  Link,
  Grid2,
  IconButton,
  Badge,
  Stack,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import { useSocket } from "./SocketContext";
import CommentModal from "./CommentModal";
import axios from "axios";

const ProfileCard = ({ profile }) => {
  const socket = useSocket();
  const {
    avatar,
    username,
    age,
    gender,
    skills,
    media,
    skillDescription,
    rating,
  } = profile;

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(profile.likeCount || 0);
  const [comments, setComments] = useState([]);

  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    if (socket) {
      socket.on("like_updated", handleNewLike);
      socket.on("new_comment", handleNewComment);
    }

    // Cleanup
    return () => {
      if (socket) {
        socket.off("like_updated", handleNewLike);
        socket.off("new_comment", handleNewComment);
      }
    };
  }, [socket]);

  const handleNewLike = (data) => {
    if (data.profileId === profile._id) {
      setLikesCount((prev) => (data.action === "liked" ? prev + 1 : prev - 1));
    }
  };

  const handleNewComment = (data) => {
    if (data.profileId === profile._id) {
      setComments((prevComments) => [...prevComments, data.comment]);
    }
  };

  const toggleLike = async () => {
    try {
      const userIdString = localStorage.getItem("userId");
      const userId = userIdString ? JSON.parse(userIdString) : null;
      console.log(userId, "userIduserIduserIduserIduserIduserId");

      if (!userId) {
        console.error("User not logged in!");
        return;
      }
      const objectIdUserId = mongoose.Types.ObjectId(userId);
      console.log("User ID to be sent to API:", objectIdUserId);
      const res = await axios.post(
        `http://localhost:3000/api/likes/${profile._id}`,
        {
          userId: objectIdUserId,
        }
      );
      console.log("User ID to be sent to API:", objectIdUserId);

      const newIsLiked = !isLiked;
      setIsLiked(newIsLiked);
      setLikesCount((prevCount) => prevCount + (isLiked ? -1 : 1));

      if (socket) {
        socket.emit("like_updated", {
          profileId: profile._id,
          userId: objectIdUserId,
          action: newIsLiked ? "liked" : "removed",
        });
      }
    } catch {
      console.log("Error toggling like:");
    }
  };

  const addComment = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/comments/${profile._id}`,
        {
          userId: objectIdUserId,
          comment: newComment,
        }
      );

      setComments([...comments, res.data]);
      setNewComment("");
      setOpenCommentModal(false);

      if (socket) {
        socket.emit("new_comment", {
          profileId: profile._id,
          userId: objectIdUserId,
          comment: newComment,
        });
      }
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleNewCommentAdded = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleDescriptionToggle = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleMediaClick = () => {
    let mediaContent = "";

    media.forEach((fileUrl) => {
      const fileExtension = fileUrl.split(".").pop().toLowerCase();

      if (
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png"
      ) {
        mediaContent += `<img src="${fileUrl}" alt="media" style="width: 100%; margin-bottom: 20px;" />`;
      } else if (fileExtension === "mp4") {
        mediaContent += `
          <video width="100%" controls style="margin-bottom: 20px;">
            <source src="${fileUrl}" type="video/${fileExtension}" />
            Your browser does not support the video tag.
          </video>
        `;
      } else if (fileExtension === "mp3") {
        mediaContent += `
          <audio controls style="width: 100%; margin-bottom: 20px;">
            <source src="${fileUrl}" type="audio/${fileExtension}" />
            Your browser does not support the audio element.
          </audio>
        `;
      }
    });

    const mediaWindow = window.open("", "_blank");
    mediaWindow.document.write("<html><head><title>Media</title></head><body>");
    mediaWindow.document.write("<h1>Media Content</h1>");
    mediaWindow.document.write(mediaContent);
    mediaWindow.document.write("</body></html>");
    mediaWindow.document.close();
  };

  return (
    <Card
      sx={{ borderRadius: 4, boxShadow: 2, maxHeight: "500px", width: "400px" }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          maxHeight: "120px",
        }}
      >
        <Avatar
          alt={username}
          src={avatar}
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Stack direction={"column"}>
          <Typography variant="h5" sx={{ fontWeight: "bold", ml: 1, mt: 1 }}>
            {username}
          </Typography>
          <Typography variant="h6" sx={{ ml: 2, mt: -0.5 }}>
            {age}
          </Typography>
        </Stack>
      </CardContent>

      <Divider sx={{ margin: "1px" }} />

      <CardContent>
        <Typography
          variant="body"
          sx={{
            fontWeight: "bold",
            marginBottom: "10px",
            border: "1px solid green",
          }}
        >
          Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            border: "1px solid red",
          }}
        >
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              color="primary"
              sx={{ margin: "10px" }}
            />
          ))}
        </Box>
      </CardContent>

      <CardContent sx={{ paddingTop: -1 }}>
        <Typography variant="body" sx={{ fontWeight: "bold" }}>
          Skills Description
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            height: "38px",
            minHeight: "38px",
            overflow: "hidden",
            WebkitLineClamp: isDescriptionExpanded ? "none" : 16,
            marginBottom: 1,
          }}
        >
          {skillDescription}
        </Typography>

        <Link
          component="button"
          onClick={handleDescriptionToggle}
          sx={{ fontSize: "0.875rem", padding: 0 }}
        >
          {isDescriptionExpanded ? "Show Less" : "Read More"}
        </Link>
      </CardContent>

      <Divider sx={{ margin: "1px 0" }} />

      <CardContent>
        <Grid2 display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body2" color="primary">
            <Link component="button" onClick={handleMediaClick}>
              View Media
            </Link>
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Rating: {rating}
          </Typography>
        </Grid2>
      </CardContent>
      <CardContent>
        <Grid2 display={"flex"} justifyContent={"end"}>
          <IconButton onClick={toggleLike}>
            <FavoriteBorderIcon>
              <Badge badgeContent={likesCount} color="secondary">
                {isLiked ? (
                  <FavoriteIcon sx={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </Badge>
            </FavoriteBorderIcon>
          </IconButton>
          <IconButton onClick={() => setOpenCommentModal(true)}>
            <ChatIcon />
          </IconButton>
          <MoreVertIcon />

          <CardContent>
            <Typography variant="body2">Comments:</Typography>
            {comments.map((comment, index) => (
              <Typography variant="body2" key={index}>
                {comment.comment}
              </Typography>
            ))}
          </CardContent>
          <CommentModal
            open={openCommentModal}
            onClose={() => setOpenCommentModal(false)}
            profileId={profile._id}
            onCommentAdded={handleNewCommentAdded}
          />
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
