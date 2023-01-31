import { Box, Toolbar } from "@mui/material";
import { Outlet, redirect } from "react-router-dom";
import { Drawer } from "./components";
import CarRepair from "@/assets/images/car.svg";
import { useState } from "react";
import { AppBar } from "./components/AppBar";

const loader = () => {
  // Simulate protection of access to this component if the user is not authenticated
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  return null;
};

export const MainLayout = () => {
  const [drawer, setDrawer] = useState(false);

  const handleToggleDrawer = () => setDrawer(!drawer);

  return (
    <Box display="flex" height="100lvh" py={5}>
      <AppBar handleToggleDrawer={handleToggleDrawer} />
      <Drawer open={drawer} handleToggleDrawer={handleToggleDrawer} />
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={3}
        width="100%"
        mt={{
          xs: "30px",
          sm: "0px",
        }}
      >
        <Outlet />
      </Box>
      <Box
        component="img"
        src={CarRepair}
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          width: "20%",
        }}
      />
    </Box>
  );
};

MainLayout.loader = loader;
