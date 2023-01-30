import {
  Box,
  Stack,
  TextField,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Form, useNavigate } from "react-router-dom";
import { useSignupForm } from "../hooks";
import _ from "lodash";
import { useTranslation } from "react-i18next";

export const SignupForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } = useSignupForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box p={4} width="100%">
      <Form method="post" action="/signup">
        <Stack spacing={3}>
          <FormControl error={touched.fullName && Boolean(errors.fullName)}>
            <FormLabel sx={{ color: "primary.main", mb: 1 }}>
              {t("fullName")}
            </FormLabel>
            <TextField id="username" required {...getFieldProps("fullName")} />
            <FormHelperText>
              {touched.fullName && errors.fullName}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.username && Boolean(errors.username)}>
            <FormLabel sx={{ color: "primary.main", mb: 1 }}>
              {t("username")}
            </FormLabel>
            <TextField
              id="username"
              required
              error={touched.username && Boolean(errors.username)}
              {...getFieldProps("username")}
            />
            <FormHelperText>
              {touched.username && errors.username}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.password && Boolean(errors.password)}>
            <FormLabel sx={{ color: "primary.main", mb: 1 }}>
              {t("password")}
            </FormLabel>
            <TextField
              id="password"
              required
              type="password"
              autoComplete="on"
              {...getFieldProps("password")}
            />
            <FormHelperText>
              {touched.password && errors.password}
            </FormHelperText>
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
              {t("register")}
            </Button>
            <Button color="secondary" onClick={() => navigate("/login")}>
              {t("login")}
            </Button>
          </Box>
        </Stack>
      </Form>
    </Box>
  );
};
