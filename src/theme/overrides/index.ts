import { Components, Theme } from "@mui/material";
import { MuiButtonOverrides } from "./Button";
import { MuiTextFieldOverrides } from "./Textfield";

export const componentOverrides: Components<Theme> = {
  MuiTextField: MuiTextFieldOverrides,
  MuiButton: MuiButtonOverrides,
};
