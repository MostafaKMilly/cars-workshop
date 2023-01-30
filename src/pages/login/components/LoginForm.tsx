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
import { useLoginForm } from "../hooks";
import _ from "lodash";
import { useTranslation } from "react-i18next";

export const LoginForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } = useLoginForm();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box p={4} width="100%">
      <Form method="post" action="/login">
        <Stack spacing={3}>
          <FormControl error={touched.username && Boolean(errors.username)}>
            <FormLabel sx={{ mb: 1 }}>{t("username")}</FormLabel>
            <TextField id="username" required {...getFieldProps("username")} />
            <FormHelperText>
              {touched.username && errors.username}
            </FormHelperText>
          </FormControl>
          <FormControl error={touched.password && Boolean(errors.password)}>
            <FormLabel sx={{ mb: 1 }}>{t("password")}</FormLabel>
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
