import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  Chat as ChatIcon,
  Create as CreateIcon,
  AccountCircle as AccountIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Sidebar = ({ open, onClose }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Check if screen is medium or larger

  const toggleProfileMenu = () => setProfileMenuOpen((prev) => !prev);

  return (
    <Drawer
      open={isLargeScreen || open}
      onClose={!isLargeScreen ? onClose : undefined}
      variant={isLargeScreen ? "persistent" : "temporary"}
      anchor="left"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ width: 200, marginTop: "200px" }} role="presentation">
        <List>
          <ListItem button sx={{ marginTop: "10%" }}>
            <ListItemIcon>
              <HomeIcon style={{ fontSize: "50px", color: "brown" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button sx={{ marginTop: "30%" }}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>
          <ListItem button sx={{ marginTop: "50px" }}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
          <ListItem button onClick={toggleProfileMenu} sx={{ margin: "50px" }}>
            <ListItemIcon>
              <AccountIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          {profileMenuOpen && (
            <Box sx={{ pl: 2 }}>
              <ListItem button>
                <ListItemText primary="Account" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Add Another Account" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Logout" />
              </ListItem>
            </Box>
          )}
        </List>

        <Divider />

        <List>
          <ListItem button sx={{ margin: "50px" }}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
