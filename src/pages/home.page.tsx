import styled from "@emotion/styled";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/card/card";
import CreateRecipe from "../components/create-recipe/create-recipe";
import Header from "../components/header/header";
import useToggle from "../hooks/toggle.hooks";
import { setRecipeList } from "../redux/store/slices/recipe/recipe.slice";
import { RootState } from "../redux/store/store";
import { httpFindAllRecipes } from "../request/auth.request";
import img from "../resources/ex-card/ex1.jpg";
import { Recipe } from "../types/recipe.type";

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;
  border-radius: 10px;
  height: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 2rem;
  column-gap: 5rem;
  flex-grow: 1;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const NoRecipesText = styled.span`
  font-size: 8rem;
  font-family: pacifico;
  color: var(--primary-color);
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CreateRecipeContainer = styled.div`
  width: 120%;
  height: 100%;
  background-color: #000;
  position: absolute;
  background-color: rgba(0,0,0,0.75);
`;

const Home = () => {
  const user = useSelector((state: RootState) => state.user);
  const recipes = useSelector((state: RootState) => state.recipes);

  const location = useLocation();
  const [showCreateRecipe, setShowCreateRecipe] = useToggle();
  const [cookies] = useCookies(["auth"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username === "") {
      navigate("/");
    }
  }, [user, location, navigate]);

  useEffect(() => {
    httpFindAllRecipes(cookies.auth?.token, user._id)
      .then((response: any) => {
        const recipes: Recipe[] = [...response?.data];
        dispatch(setRecipeList({ recipeList: recipes }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cookies.auth?.token, dispatch, user._id]);

  return (
    <Container>
      <Header
        onShowRecipe={setShowCreateRecipe}
        showRecipe={showCreateRecipe}
      />
      <CardContainer>
        {showCreateRecipe && (
          <CreateRecipeContainer>
            <CreateRecipe onShowRecipe={setShowCreateRecipe} />
          </CreateRecipeContainer>
        )}

        {recipes?.recipeList.length !== 0 ? (
          recipes?.recipeList.map((data) => {
            const { title, description, duration, _id, user } = data;
            return (
              <Card
                key={_id}
                img={img}
                title={title}
                description={description}
                duration={duration}
                user={user}
              ></Card>
            );
          })
        ) : (
          <NoRecipesText>Recipes not added yet</NoRecipesText>
        )}
      </CardContainer>
    </Container>
  );
};
export default Home;
