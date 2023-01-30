import { Box, BoxProps } from "@mui/material";
import React from "react";
import ThreedotsHorizontal from "@/assets/icons/threedotsHorizontal.svg";

export const MoreIcon = (props: BoxProps) => {
  return (
    <Box>
      <img src={ThreedotsHorizontal} />
    </Box>
  );
};
