import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  font-size: 8rem;
  font-family: pacifico;
  color: var(--primary-color);
`;

const NotAuthorized = () => {
  return (
    <Container>
      <Text>Not Authorized...</Text>
    </Container>
  );
};

export default NotAuthorized;
