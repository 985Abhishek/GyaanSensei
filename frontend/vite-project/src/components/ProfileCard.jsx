import React, { useState } from "react";
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
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';

const ProfileCard = ({ profile }) => {
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

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

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
    <Card sx={{  borderRadius: 4, boxShadow: 2, maxHeight: "auto" }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt={username}
          src={avatar}
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {username}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Age: {age}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Gender: {gender}
        </Typography>
      </CardContent>

      <Divider sx={{ margin: "1px 0" }} />

      <CardContent>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Skills:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              color="primary"
              sx={{ margin: "2px" }}
            />
          ))}
        </Box>
      </CardContent>

      <CardContent sx={{ paddingTop: 0 }}>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            height: "38px",
            minHeight: "38px",
            overflow: "hidden",
            WebkitLineClamp: isDescriptionExpanded ? "none" : 8,
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
          <FavoriteBorderIcon />
          <ChatIcon/>
          <MoreVertIcon/>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
