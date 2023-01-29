import { createTheme, Theme } from "@mui/material";
import { componentOverrides } from "./overrides";
import { palette } from "./palette";
import typography from "./typography";

export const theme = (direction: Theme["direction"]) =>
  createTheme({
    palette,
    direction,
    components: componentOverrides,
    typography,
  });
