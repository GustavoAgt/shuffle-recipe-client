import { render } from "@testing-library/react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store/store";

test("renders app container", () => {
  const { container } = render(
    <BrowserRouter>
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
    </BrowserRouter>
  );
  const el = container.getElementsByClassName("app__container");
  expect(el.length).toBe(1);
});
