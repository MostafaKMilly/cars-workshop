import { Box } from "@mui/material";
import { FormContainer, SignupForm } from "./components";

export const Signup = () => {
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
        <SignupForm />
      </FormContainer>
    </Box>
  );
};
