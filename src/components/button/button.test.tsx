import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "./button";

describe("render button", () => {
  test("should render a button", () => {
    render(<PrimaryButton value="submit" />);
    const button = screen.getByRole("button", { name: "submit" });
    expect(button).toBeVisible();
    expect(button).toBeEnabled();
  });
});
