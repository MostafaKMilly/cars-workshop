import MuiShadows, { Shadows } from "@mui/material/styles/shadows";

export const shadows = [
  "none",
  "-2px 2px 6px 2px rgba(0, 0, 0, 0.17), inset 0px 0px 4px 1px rgba(243, 239, 245, 0.12)",
  ...MuiShadows.slice(2),
] as Shadows;
