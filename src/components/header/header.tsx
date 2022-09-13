import styled from "@emotion/styled";
import { FC } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/store/slices/user/user.slice";
import { User } from "../../types/user.types";
import { PrimaryButton } from "../button/button";

const Container = styled.header`
  display: flex;
  width: 80%;
  height: 8.5rem;
  column-gap: 2rem;
  border-bottom: #000 solid 1.5px;
  margin: 2.5rem auto 5rem auto;
  padding: 1rem 0;
`;

type Props = {
  onShowRecipe: () => void;
  showRecipe: boolean;
};

const Header: FC<Props> = ({ onShowRecipe, showRecipe }) => {
  const [setCookies, remove] = useCookies(["auth"]);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    remove("auth", []);
    dispatch(setUser({ username: "", _id: "" } as User));
    navigation("/");
  };
  return (
    <Container>
      <PrimaryButton
        value="Create new recipe"
        onClick={onShowRecipe}
        disabled={showRecipe}
      />
      <PrimaryButton value="Logout" width="20%" onClick={onLogout} disabled={showRecipe}/>
    </Container>
  );
};

export default Header;
