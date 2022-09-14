import styled from "@emotion/styled";
import { Form, Formik } from "formik";
import { FC } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { notifyInfo, notifySuccess } from "../../notify/notify";
import { setRecipeList } from "../../redux/store/slices/recipe/recipe.slice";
import { RootState } from "../../redux/store/store";
import { httpCreateARecipe } from "../../request/auth.request";
import { Recipe } from "../../types/recipe.type";
import { PrimaryButton } from "../button/button";
import { FieldW } from "../field/field";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  border: 0.15rem solid #000;
  border-radius: 10px;
  z-index: 2;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 70%;
  width: 25%;
  padding: 5rem;
  row-gap: 3.5rem;
  @media only screen and (max-width: 76.8rem) {
    width: 50%;
  }

  @media only screen and (max-width: 60.4rem) {
    width: 80%;
  }
`;

const MainText = styled.span`
  font-size: 5rem;
  color: var(--primary-color);
`;

const Close = styled.div`
  font-size: 2rem;
  position: absolute;
  float: left;
  &:hover {
    transform: scale(1.4);
    cursor: pointer;
  }
`;

type Props = {
  onShowRecipe: () => void;
};

type Values = {
  title: string;
  description: string;
  duration: string;
};
const CreateRecipe: FC<Props> = ({ onShowRecipe }) => {
  const [cookies] = useCookies(["auth"]);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);
  const recipes = useSelector((state: RootState) => state.recipes.recipeList);

  return (
    <Container>
      <Close
        onClick={() => {
          onShowRecipe();
        }}
      >
        X
      </Close>
      <MainText>Create Recipe</MainText>

      <Formik
        initialValues={{ title: "", description: "", duration: "" }}
        onSubmit={(values: Values) => {
          const recipe: Recipe = {
            title: values.title,
            description: values.description,
            duration: +values.duration,
            user: {
              _id: user._id,
            },
          };
          httpCreateARecipe(cookies.auth?.token, recipe)
            .then((response) => {
              const newRecipe: Recipe = { ...(response.data as Recipe), user };

              dispatch(setRecipeList({ recipeList: [...recipes, newRecipe] }));
              onShowRecipe();
            })
            .then(() => {
              notifySuccess(`Recipe has been created`);
            });
        }}
      >
        {({ errors, touched, handleChange }) => {
          const onHandleChange = (e: any) => {
            handleChange(e);
          };
          return (
            <Form>
              <FieldW
                id="title"
                type="text"
                text="Title"
                errorBoxHeight="3.5rem"
                errorVal={errors.title}
                touchedVal={touched.title}
                onHandleChange={onHandleChange}
              />

              <FieldW
                id="duration"
                type="number"
                text="Cooking time"
                errorBoxHeight="3.5rem"
                errorVal={errors.description}
                touchedVal={touched.description}
                onHandleChange={onHandleChange}
              />

              <FieldW
                id="description"
                type="text"
                text="Description"
                errorBoxHeight="3.5rem"
                errorVal={errors.description}
                touchedVal={touched.description}
                as={"textarea"}
                onHandleChange={onHandleChange}
              />
              <PrimaryButton value="Create" type="submit" />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default CreateRecipe;
