import { render, screen } from "@testing-library/react";
import NotAuthorized from "./not-authorized.page";

test("render not-authorized container", () => {
  render(<NotAuthorized />);
  const el = screen.getByText("Not Authorized...");
  expect(el).toHaveTextContent("Not Authorized...");
});
