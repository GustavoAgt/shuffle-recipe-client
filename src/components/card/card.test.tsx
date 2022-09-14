import { render, screen } from "@testing-library/react";
import { Recipe } from "../../types/recipe.type";
import Card from "./card";

describe("render card container", () => {
  test("should render card", () => {
    const recipe: Recipe = {
      title: "card",
      description: "description",
      duration: 0,
    };
    render(<Card {...recipe} />);
    const card = screen.getByText("card");
    const desc = screen.getByText("description");
    const duration = screen.getByText("Time: 0 hr~");
    expect(card).toBeVisible();
    expect(desc).toBeVisible();
    expect(duration).toBeVisible();
  });
});
