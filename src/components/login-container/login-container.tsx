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

  @media only screen and (max-width: 76.8rem) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 7.5rem;
  color: var(--primary-color);
  font-weight: 100;
  font-family: pacifico;

  @media only screen and (max-width: 60.4rem) {
    font-size: 5.5rem;
  }
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
