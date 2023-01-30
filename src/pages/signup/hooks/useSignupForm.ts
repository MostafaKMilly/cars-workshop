import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

export const useSignupForm = () => {
  const { t } = useTranslation();
  const formik = useFormik<{
    username: string;
    password: string;
    fullName: string;
  }>({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
    },
    onSubmit: (result) => {
      console.log(result);
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, t("fullName_validation")!)
        .required(t("fullName_required")!),
      username: Yup.string()
        .min(5, t("username_validation")!)
        .required(t("username_required")!),
      password: Yup.string()
        .min(7, t("password_validation")!)
        .required(t("password_required")!),
    }),
  });
  return formik;
};
