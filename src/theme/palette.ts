import {
  PaletteOptions,
  SimplePaletteColorOptions,
  CommonColors,
} from "@mui/material";

const primary: SimplePaletteColorOptions = {
  main: "#3F7D20",
  light: "#6fac4d",
  dark: "#084f00",
};

const secondary: SimplePaletteColorOptions = {
  main: "#454955",
  dark: "#1e222c",
  light: "#707481",
};

const error: SimplePaletteColorOptions = {
  main: "#9e0000",
  light: "#d7442b",
  dark: "#690000",
};

const common: CommonColors = {
  black: "#0D0A0B",
  white: "#F3EFF5",
};

export const palette: PaletteOptions = {
  primary,
  secondary,
  error,
  common,
  mode: "dark",
  background: {
    paper: common.black,
  },
};
