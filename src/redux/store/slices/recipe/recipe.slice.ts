import { RootState } from './../../store';
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../../../../types/recipe.type";

type State = { recipeList: Array<Recipe> };

const initialState: State = {
  recipeList: [],
};

const recipeListSlice = createSlice({
  name: "recipeList",
  initialState,
  reducers: {
    setRecipeList: (state, action: PayloadAction<State>) => {
        state.recipeList = action.payload.recipeList
    },
  },
});

export const {setRecipeList} = recipeListSlice.actions;
export const getRecipeList = (state: RootState) => state.recipes;
export default recipeListSlice.reducer;