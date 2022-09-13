import styled from "@emotion/styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/login-container/login-container";
import { RootState } from "../redux/store/store";
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

  @media only screen and (max-width: 76.8rem) {
    justify-content: center;
  }
`;

const Auth = () => {
  const user = useSelector((state: RootState) => state.user);

  const navigation = useNavigate();

  useEffect(() => {
    if (user.username !== "") {
      navigation("/home");
    }
  });
  return (
    <Main img={bg_img}>
      <LoginContainer />
    </Main>
  );
};

export default Auth;
