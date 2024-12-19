// src/components/Signup.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/AuthStore";
import { TextField, Button, Box, Typography, Grid2 } from "@mui/material";
import { Container } from "@mui/system";

const Signup = () => {
  const navigate = useNavigate();
  const { signupData, setSignupData, clearSignupData } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const result = await response.json();
    alert(result.message || "Signup successful!");

    clearSignupData();
    if (result.ok) {

      navigate("/dashboard");
    }
  };

  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #00c6ff, #0072ff)",
      }}
    >
      <Box
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding={2}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          paddingBottom: "2rem",
          width: "700px",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/182011/optimized_large_thumb_stage.jpg"
          alt="Logo"
          sx={{
            width: "50%",
            margin: "0 auto 20px",
          }}
        />
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Grid2 container spacing={2}>
            {/* Name Input */}
            <Grid2 size={12}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                variant="outlined"
                required
                value={signupData.name}
                onChange={handleChange}
              />
            </Grid2>

            {/* Email Input */}
            <Grid2 size={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
                required
                value={signupData.email}
                onChange={handleChange}
              />
            </Grid2>

            {/* Password Input */}
            <Grid2 size={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                variant="outlined"
                required
                value={signupData.password}
                onChange={handleChange}
              />
            </Grid2>

            {/* Mobile Input */}
            <Grid2 size={12}>
              <TextField
                label="Mobile Number"
                name="mobile"
                fullWidth
                variant="outlined"
                required
                value={signupData.mobile}
                onChange={handleChange}
              />
            </Grid2>

            {/* Submit Button */}
            <Grid2 size={12} sx={{ marginTop: "1rem" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ padding: "0.8rem", fontWeight: "bold" }}
              >
                Sign Up
              </Button>
            </Grid2>
          </Grid2>
        </form>

        <Typography variant="body2" sx={{ marginTop: "1rem" }}>
          Already have an account?{" "}
          <a href="/login" style={{ textDecoration: "none", color: "#1976d2" }}>
            Login here
          </a>
        </Typography>
      </Box>
    </Grid2>
  );
};

export default Signup;
