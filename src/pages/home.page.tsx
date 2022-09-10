import styled from "@emotion/styled";
import LoginContainer from "../components/login-container/login-container";
import bg_img from "../resources/bg_img.jpeg";

type Props = {
  img: string;
};

const Main = styled.main<Props>`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;

const Home = () => {
  return (
    <Main img={bg_img}>
      <LoginContainer />
    </Main>
  );
};

export default Home;
