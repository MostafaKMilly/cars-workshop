import { Components, Theme } from "@mui/material";
export const MuiTextFieldOverrides: Components<
  Omit<Theme, "components">
>["MuiTextField"] = {
  defaultProps: {
    variant: "filled",
    hiddenLabel: true,
    InputProps: {
      disableUnderline: true,
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.light}`,
      borderRadius: 10,
      minWidth: 120,
    }),
  },
  variants: [
    {
      props: {
        variant: "filled",
      },
      style: ({ theme }) => ({
        "& .MuiFormLabel-root": {
          display: "none",
        },
        "& .MuiInputBase-root": {
          backgroundColor: theme.palette.primary.main,
          height: 36,
          color: "#F3EFF5",
          borderRadius: 10,
          overflow: "hidden",
        },
        "& .MuiFilledInput-root::after .MuiFilledInput-root::before": {
          display: "none",
        },
      }),
    },
    {
      props: {
        select: true,
      },
      style: ({ theme }) => ({
        "& .MuiInputBase-root .MuiSvgIcon-root ": {
          background: theme.palette.common.black,
          width: "34px",
          height: "35px",
          margin: "-6px",
          color: theme.palette.primary.light,
          borderRadius: "10px",
          border: `2px solid ${theme.palette.primary.light}`,
        },
      }),
    },
  ],
};
