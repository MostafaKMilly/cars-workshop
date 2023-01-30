import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
} from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import { useLoginForm } from "../hooks";
import _ from "lodash";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } = useLoginForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  console.log(touched);
  return (
    <Box p={4} width="100%">
      <Form method="post" action="/login">
        <Stack spacing={3}>
          <FormControl>
            <FormLabel sx={{ color: "primary.main", mb: 1 }}>
              {t("username")}
            </FormLabel>
            <TextField
              id="username"
              required
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              {...getFieldProps("username")}
            />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ color: "primary.main", mb: 1 }}>
              {t("password")}
            </FormLabel>
            <TextField
              id="password"
              required
              type="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              {...getFieldProps("password")}
            />
          </FormControl>
          <Box
            pt={2}
            display="flex"
            flexDirection={"row"}
            columnGap={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              type="submit"
              disabled={!dirty || !isValid}
            >
              {t("login")}
            </Button>
            <Button color="secondary" onClick={() => navigate("/signup")}>
              {t("register")}
            </Button>
          </Box>
        </Stack>
      </Form>
    </Box>
  );
};
