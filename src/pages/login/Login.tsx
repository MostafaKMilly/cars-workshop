import { Box, Paper } from "@mui/material";
import { FormContainer, LoginForm } from "./components";

export const Login = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      px={1}
    >
      <FormContainer elevation={1}>
        <img src="/logo.svg" alt="logo" width={130} />
        <LoginForm />
      </FormContainer>
    </Box>
  );
};
