import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",

  justifyContent: "center",
  alignItems: "center",
  backgroundColor:"whitesmoke",
//   backgroundColor: alpha(theme.palette.common.black, 0.1),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.black, 0.25),
//   },

  width: "100%",
  height: "60px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "92ch",
    },
  },
}));

export default function SearchAppBar() {
  return (
    <center>
      <Box sx={{ flexGrow: 1, margin: "20px",  }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase sx= {{color:"black", marginTop:"10px"}}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </center>
  );
}
