import styled from "@emotion/styled";
import SignIn from "../sign-in/sign-in";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.5%;
  height: 100%;
  background-color: #fff;
  opacity: 0.87;
`;

const Title = styled.h1`
  font-size: 7.5rem;
  color: var(--primary-color);
  font-weight: 100;
  font-family: pacifico;
`;

const LoginContainer = () => {
  return (
    <Container>
      <Title>ShuffleRecipe</Title>
      <SignIn />
    </Container>
  );
};

export default LoginContainer;
