import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import { PrimaryButton } from "../button/button";
import { FieldW } from "../field/field";

const Container = styled.div`
  width: 90%;
  height: 25rem;
`;

const SignIn = () => {
  return (
    <Container>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {({ errors, touched }) => (
          <Form>
            <FieldW id="username" type="text" text="Username" />
            <FieldW id="password" type="password" text="Password" />
            <PrimaryButton value="Login" />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;
