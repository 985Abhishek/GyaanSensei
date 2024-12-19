import { Chip, Stack } from "@mui/material";
import React from "react";

const Chips = [
  "Tech",
  "Musical",
  "Sports",
  "Art & Craft",
  "Automotive",
  "Health & Wellness",
  "Cooking",
  "Fashion",
];

const SuggestionChips = () => {
  return (
    <Stack direction={"row"} justifyContent={"start"} margin={"20px"} >


      {Chips.map((item, index) => {
        return (
          <Chip key={index} label={item} variant="outlined" sx={{ mr: 1 }} />
        );
      })}
    </Stack>
  );
};

export default SuggestionChips;
