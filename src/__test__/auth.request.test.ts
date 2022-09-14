import { Recipe } from "./../../../shuffle-recipe-backend/src/types/recipe.type";
import axios from "axios";
import {
  httpCreateARecipe,
  httpFindAllRecipes,
  httpLogin,
  httpRegister,
  httpUser,
} from "../request/auth.request";
import { User } from "../types/user.types";

describe("testing http request", () => {
  test("should login", async () => {
    axios.post = jest.fn().mockReturnValue(true);
    const spy = jest.spyOn(axios, "post");

    await httpLogin("test", "test");

    expect(spy).toHaveBeenCalled();
  });

  test("should register", async () => {
    axios.post = jest.fn().mockReturnValue(true);
    const spy = jest.spyOn(axios, "post");

    await httpRegister("test", "test");

    expect(spy).toHaveBeenCalled();
  });

  test("should response with user", async () => {
    axios.get = jest.fn().mockReturnValue(true);
    const spy = jest.spyOn(axios, "get");

    await httpUser("yoken");

    expect(spy).toHaveBeenCalled();
  });

  test("should create a recipe", async () => {
    axios.post = jest.fn().mockReturnValue(true);
    const spy = jest.spyOn(axios, "post");
    const mockRecipe: Recipe = {
      title: "",
      description: "",
      duration: 0,
      user: { username: "", password: "" },
    };

    await httpCreateARecipe("token", mockRecipe);

    expect(spy).toHaveBeenCalled();
  });

  test("should find all recipes", async () => {
    axios.get = jest.fn().mockImplementation((route: string, obj: any) => {});
    const spy = jest.spyOn(axios, "get");

    await httpFindAllRecipes("token", "id");

    expect(spy).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
