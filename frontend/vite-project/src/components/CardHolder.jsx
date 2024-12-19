import React from "react";
import { Grid2 } from "@mui/material";
import ProfileCard from "./ProfileCard";

const CardHolder = ({ profiles }) => {
  return (
    <Grid2 container marginBottom={"16px"} spacing={2} >
      {profiles.map((profile, index) => (
         <Grid2 size={{ xs: 12, sm:6 ,md: 4, lg:4 }} key={index}  style={{ display: "flex", flexWrap: "wrap" }}  >
        {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        </div> */}
          <ProfileCard key={profile._id} profile={profile} />
         </Grid2>
      ))}
    </Grid2>
  );
};

export default CardHolder;
