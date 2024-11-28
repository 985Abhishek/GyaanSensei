import { Avatar, Box, IconButton, Stack, Tooltip } from "@mui/material";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { blueGrey } from "@mui/material/colors";
import { IoMdHome } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import React from "react";

const ExampleSidebar = () => {
  return (
    <Box
      p={2}
      sx={{
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "90vh",
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Stack alignItems={"center"} spacing={1}>
          <Avatar
            variant="rounded"
            sx={{
              backgroundColor: blueGrey,
              height: 60,
              width: 60,
            }}
          >
            <Box>
              <img
                src="https://i.pinimg.com/236x/20/66/d2/2066d2c827626c1cd00a501008794f52.jpg"
                alt="Gyaan Sensei"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Avatar>
        </Stack>

        <Stack
          direction={"column"}
          alignItems={"center"}
          spacing={3}
          sx={{ flexGrow: 1, marginTop: "20px" }}
        >
          <IconButton sx={{ fontSize: "42px", color: "black" }}>
            <IoMdHome />
          </IconButton>
          <IconButton sx={{ fontSize: "42px", color: "black" }}>
            <IoChatbubbleEllipsesOutline />
          </IconButton>
          <IconButton sx={{ fontSize: "42px", color: "black" }}>
            <MdExplore />
          </IconButton>
          <IconButton sx={{ fontSize: "42px", color: "black" }}>
            <IoIosNotifications />
          </IconButton>
        </Stack>

        {/* Settings Icon at the Bottom */}
        <Box sx={{ marginTop: "auto" }}>
          <IconButton sx={{ fontSize: "42px", color: "black" }}>
            <FiSettings />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default ExampleSidebar;
