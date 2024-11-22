// src/components/Profile.jsx
import React from "react";
import { Avatar, Typography, Grid, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // For online status
import { green } from "@mui/material/colors";

const Profile = () => {
  // Sample data (you can replace this with props or state as needed)
  const user = {
    name: "John Doe",
    gender: "Male",
    skills: [
      {
        name: "Mathematics",
        description: "Expert in calculus and algebra",
        charge: 20,
      },
      {
        name: "Physics",
        description: "Specializes in mechanics and thermodynamics",
        charge: 25,
      },
    ],
    timeAvailable: "10 hours per week",
    rating: 4.5,
    isActive: true, // Online status
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
          <Avatar
            alt={user.name}
            src="/path/to/avatar.jpg" // Replace with actual image path or URL
            style={{ width: "100px", height: "100px", marginBottom: "10px" }}
          />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">{user.gender}</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleIcon
              style={{
                color: user.isActive ? green[500] : "#ccc",
                marginRight: "5px",
              }}
            />
            <Typography variant="body2" color="textSecondary">
              {user.isActive ? "Online" : "Offline"}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6">Skills</Typography>
          {user.skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Typography variant="subtitle1">{skill.name}</Typography>
              {skill.description && (
                <Typography variant="body2" color="textSecondary">
                  {skill.description}
                </Typography>
              )}
              <Typography variant="body2">
                Charge: ${skill.charge}/hour
              </Typography>
            </div>
          ))}
          <Typography variant="body2">
            Time Available to Teach: {user.timeAvailable}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" style={{ marginRight: "5px" }}>
              Rating:
            </Typography>
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                color={index < user.rating ? "primary" : "disabled"}
              />
            ))}
            <Typography variant="body2" style={{ marginLeft: "5px" }}>
              {user.rating}/5
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Profile;
