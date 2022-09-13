import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .matches(/^[a-zA-Z0-9]+$/, "Username is not valid"),
    password: Yup.string()
      .min(8, "Password not valid")
      .required("Password is required")
  });
  