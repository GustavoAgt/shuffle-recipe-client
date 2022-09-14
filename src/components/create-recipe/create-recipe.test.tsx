import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import CreateRecipe from "./create-recipe";

describe("render create-recipe", () => {
  test("should render create-recipe", () => {
    render(
      <Provider store={store}>
        <CreateRecipe onShowRecipe={() => {}} />
      </Provider>
    );

    const title = screen.getByRole("textbox", { name: "Title" });
    const desc = screen.getByRole("textbox", { name: "Description" });
    const duration = screen.getByRole("spinbutton", { name: "Cooking time" });

    const button = screen.getByRole("button", { name: "Create" });

    const close = screen.getByText("X");
    const mainText = screen.getByText("Create Recipe");

    expect(title).toBeVisible();
    expect(desc).toBeVisible();
    expect(duration).toBeVisible();
    expect(button).toBeVisible();
    expect(close).toBeVisible();
    expect(mainText).toBeVisible();
  });
});
