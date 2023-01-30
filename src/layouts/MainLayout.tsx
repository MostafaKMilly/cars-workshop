import { Box } from "@mui/material";
import { Outlet, redirect } from "react-router-dom";
import { Drawer } from "./components";
import CarRepair from "@/assets/images/car.svg";

const loader = () => {
  // Simulate protection of access to this component if the user is not authenticated
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  return null;
};

export const MainLayout = () => {
  return (
    <Box display="flex" height="100lvh" py={5}>
      <Drawer />
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
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
