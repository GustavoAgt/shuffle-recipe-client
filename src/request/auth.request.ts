import axios from "axios";
import { AUTH, ENDPOINT, RECIPE } from "../contants/api";
import { Recipe } from "../types/recipe.type";

const httpLogin = (username: string, password: string) => {
  return axios.post(`${ENDPOINT}${AUTH}/login`, {
    username,
    password,
  });
};

const httpRegister = (username: string, password: string) => {
  return axios.post(`${ENDPOINT}${AUTH}/register`, {
    username,
    password,
  });
};

const httpUser = (token: string) => {
  return axios.get(`${ENDPOINT}${AUTH}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const httpCreateARecipe = (token: string, recipe: Recipe) => {
  return axios.post(
    `${ENDPOINT}${RECIPE}`,
    {
      ...recipe,
    },

    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

const httpFindAllRecipes = (token: string, id?: string) => {
  return axios.get(`${ENDPOINT}${RECIPE}/all/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export {
  httpLogin,
  httpUser,
  httpRegister,
  httpCreateARecipe,
  httpFindAllRecipes,
};
