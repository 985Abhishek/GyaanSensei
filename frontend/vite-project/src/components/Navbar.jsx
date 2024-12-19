import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
 
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Brightness4 as Brightness4Icon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Navbar = ({ onDrawerToggle, onDarkModeToggle }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <AppBar position="relative" sx={{ marginLeft: "10vw", width: "89vw" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onDrawerToggle}
        ></IconButton>

        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h6">Gyaan Sensei</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              color: "inherit",
              ml: 2,
              backgroundColor: theme.palette.grey[800],
              borderRadius: 1,
              padding: "0 10px",
            }}
          />
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ ml: 2 }} onClick={onDarkModeToggle}>
            <Brightness4Icon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
