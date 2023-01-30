import { Components, Theme } from "@mui/material";
import { MuiButtonOverrides } from "./Button";
import { CssBaselineOverrides } from "./CssBaseLine";
import { MuiFormLableOverrides } from "./FormLabel";
import { MuiTextFieldOverrides } from "./Textfield";

export const componentOverrides: Components<Theme> = {
  MuiTextField: MuiTextFieldOverrides,
  MuiButton: MuiButtonOverrides,
  MuiCssBaseline: CssBaselineOverrides,
  MuiFormLabel: MuiFormLableOverrides,
};
