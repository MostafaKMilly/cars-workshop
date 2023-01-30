import {
  AppBarProps,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@/assets/icons/menuIcon.svg";

export const AppBar = ({
  handleToggleDrawer,
}: {
  handleToggleDrawer: () => void;
}) => {
  return (
    <MuiAppBar
      position="absolute"
      elevation={1}
      sx={{ display: { xs: "flex", sm: "none" } }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton onClick={handleToggleDrawer}>
          <img src={MenuIcon} alt="MenuIcon" />
        </IconButton>
        <img src={"/smallLogo.svg"} alt="logo" width={50} />
      </Toolbar>
    </MuiAppBar>
  );
};
