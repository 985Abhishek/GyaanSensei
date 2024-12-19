import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import CardHolder from "./CardHolder";
import axios from "axios";
import { SocketProvider } from "./SocketContext";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ExampleSidebar from "./ExampleSidebar";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Detect screen size

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/profile/profileData"
        );
        console.log("Fetched profiles:", response.data);
        setProfiles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
        setLoading(false);
      }
    };

    fetchProfiles();
    setLoading(false);
  }, []);

  

  const themeMode = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <SocketProvider>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        <Stack sx ={{display:"flex "}}>


        <Navbar/>
        <ExampleSidebar />
        </Stack>

        <Container>
          <h1>Welcome to the Dashboard</h1>
          {profiles.length > 0 ? (
            <CardHolder profiles={profiles} />
          ) : (
            <p>No profiles available.</p>
          )}
        </Container>
      </ThemeProvider>
    </SocketProvider>
  );
};

export default Dashboard;
