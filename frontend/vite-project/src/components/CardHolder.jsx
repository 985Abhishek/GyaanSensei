import React from "react";
import { Grid2 } from "@mui/material";
import ProfileCard from "./ProfileCard";

const CardHolder = ({ profiles }) => {
  return (
    <Grid2 container marginBottom={"16px"} spacing={2}>
      {profiles.map((profile, index) => (
        <Grid2 size={{ xs: 12, sm:6 ,md: 4, lg:4 }} key={index}  >
          <ProfileCard profile={profile} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CardHolder;
