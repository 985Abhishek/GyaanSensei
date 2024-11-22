import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Container } from "@mui/material";
import CardHolder from "./CardHolder";
import axios from "axios";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div  >
      <Navbar onDrawerToggle={() => setDrawerOpen(!drawerOpen)} />
      <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <Container  >
        <h1 >Welcome to the Dashboard</h1>

        {profiles.length > 0 ? (
          <CardHolder profiles={profiles} />
        ) : (
          <p>No profiles available.</p>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
