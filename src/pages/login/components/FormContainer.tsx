import { Paper, styled } from "@mui/material";

export const FormContainer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  borderRadius: "50px",
  width: "600px",
  paddingTop: 24,
  paddingBottom: 24,
  display: "flex",
  rowGap : 24,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
