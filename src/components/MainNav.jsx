import React, { useEffect } from "react";
import {
  RiFireLine,
  RiMovieLine,
  RiSearchLine,
  RiTvLine,
} from "react-icons/ri";
import "./component.css";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function MainNav() {
  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  // useEffect hook to set the location of each button in the navigation
  useEffect(() => {
    if (value === 0) history("/");
    else if (value === 1) history("/movies");
    else if (value === 2) history("/series");
    else if (value === 3) history("/search");
    // eslint-disable-next-line
  }, [value, history]);

  return (
    // navigation by Material UI React
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="bottom-nav"
        style={{ backgroundColor: "#121212" }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<RiFireLine />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<RiMovieLine />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<RiTvLine />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<RiSearchLine />}
        />
      </BottomNavigation>
    </Box>
  );
}
