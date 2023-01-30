import { Components, Theme } from "@mui/material";

export const CssBaselineOverrides: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: ({ palette }) => ({
    "html , body": {
      margin: 0,
      padding: 0,
      backgroundColor: palette.secondary.main,
    },
    "&": {
      scrollbarWidth: "thin",
      scrollbarColor: "#bfbfbf transparent",
    },
    "&::-webkit-scrollbar": {
      width: "7px",
      height: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
      borderRadius: "20px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#bfbfbf",
      borderRadius: "20px",
    },
  }),
};
