import useStore from "../store/AuthStore";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid2,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { loginData, setLoginData, clearLoginData } = useStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    console.log(result, "result");
    alert(result.message || "Login successful!");
    if (!result.userId) {
      // If the response isn't ok, throw an error
      const errorResult = await response.json();
      alert(errorResult.message || "Login failed!");
      return;
    }

    if (result.userId) {
      localStorage.setItem("userId", result.userId);

      clearLoginData();
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
      <Grid2 item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={10}
          sx={{
            padding: 3,
            background: "white",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: 3,
            width: "700px",
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
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Please log in to continue to your dashboard.
          </Typography>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              required
              value={loginData.email}
              onChange={handleChange}
              sx={{ borderRadius: "8px" }}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              margin="normal"
              required
              value={loginData.password}
              onChange={handleChange}
              sx={{ borderRadius: "8px" }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginTop: "16px",
                padding: "12px",
                backgroundColor: "#0072ff",
                "&:hover": {
                  backgroundColor: "#005bb5",
                },
              }}
            >
              Login
            </Button>
          </form>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: "16px" }}
          >
            Don't have an account?{" "}
            <a href="/signup" style={{ color: "#0072ff" }}>
              Sign up here
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <a href="/forgot-password" style={{ color: "#0072ff" }}>
              Forgot Password?
            </a>
          </Typography>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Login;
