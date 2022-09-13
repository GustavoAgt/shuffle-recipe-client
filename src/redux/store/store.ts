import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slices/user/user.slice";
import recipeReducer from "./slices/recipe/recipe.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    recipes: recipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
