import { Box } from "@mui/material";
import { FormContainer, LoginForm } from "./components";
import { ActionFunctionArgs, redirect } from "react-router-dom";

const loader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return redirect("/");
  }
  return null;
};

const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  // Store dummy form data to simulate a successful login request
  localStorage.setItem("token", JSON.stringify(formData));
  return redirect("/");
};

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

Login.loader = loader;
Login.action = action;
