import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/toggle.hooks";
import { notifyErr, notifyInfo, notifySuccess } from "../../notify/notify";
import { setUser } from "../../redux/store/slices/user/user.slice";

import { httpLogin, httpRegister } from "../../request/auth.request";
import { User } from "../../types/user.types";
import { SignUpSchema } from "../../validation-schemas/sign-in.v-schema";
import { PrimaryButton } from "../button/button";
import { FieldW } from "../field/field";

const Container = styled.div`
  width: 90%;
  height: 25rem;
`;

const CreateAccountText = styled.span`
  font-size: 1.7rem;
  color: var(--primary-color);
  margin-bottom: 2.5rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const RegisterText = styled.span`
  font-size: 4.8rem;
  text-align: center;
  color: var(--primary-color);
`;

type Values = {
  username: string;
  password: string;
};

const SignIn = () => {
  const [registerToggle, setRegisterToggle] = useToggle();

  const [errorMsg, setErrorMsg] = useState<string>();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["auth"]);

  const navigation = useNavigate();

  const onShowRegister = () => {
    setRegisterToggle();
  };

  const registerUser = async (username: string, password: string) => {
    try {
      await httpRegister(username, password);
    } catch (err) {
      setErrorMsg((err as any)?.response?.data?.error);
    }
  };
  const loginUser = async (username: string, password: string) => {
    try {
      const resp = await httpLogin(username, password);
      setCookie("auth", resp.data);
      const user: User = Object.assign({}, { ...resp?.data.user });

      dispatch(setUser(user));
      navigation("/home");
      notifyInfo(`Welcome back! ${username}`);
    } catch (err) {
      setErrorMsg((err as any)?.response?.data?.error);
    }
  };

  return (
    <Container>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values: Values) => {
          const { username, password } = values;
          if (registerToggle) {
            await registerUser(username, password);
            notifySuccess(`User ${username} have been created`);
            setRegisterToggle();
          } else {
            await loginUser(username, password);
          }
        }}
        validationSchema={SignUpSchema}
      >
        {({ errors, touched, handleChange }) => {
          const onHandleChange = (e: any) => {
            if (e.target.name === "username") {
              setErrorMsg("");
            }
            handleChange(e);
          };
          return (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              {registerToggle && <RegisterText>User Registration</RegisterText>}
              <FieldW
                id="username"
                type="text"
                text="Username"
                errorBoxHeight="3.5rem"
                extraError={errorMsg}
                errorVal={errors.username}
                touchedVal={touched.username}
                onHandleChange={onHandleChange}
              />
              <FieldW
                id="password"
                type="password"
                text="Password"
                errorBoxHeight="3.5rem"
                extraError={errorMsg}
                errorVal={errors.password}
                touchedVal={touched.password}
                onHandleChange={onHandleChange}
              />

              <CreateAccountText onClick={onShowRegister}>
                {registerToggle
                  ? "I have an account"
                  : "Do you have an account?"}
              </CreateAccountText>
              <PrimaryButton
                value={registerToggle ? "Register" : "Login"}
                type="submit"
              />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default SignIn;
