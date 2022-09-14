import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./app.styles.scss";
import Auth from "./pages/auth.page";
import Home from "./pages/home.page";
import NotAuthorized from "./pages/not-authorized.page";
import { setUser } from "./redux/store/slices/user/user.slice";
import { RootState } from "./redux/store/store";
import { httpUser } from "./request/auth.request";
import { User } from "./types/user.types";

function App() {
  const [cookies] = useCookies(["auth"]);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (cookies.auth?.token) {
      httpUser(cookies.auth?.token).then((data) => {
        const user: User = Object.assign({}, { ...data.data });
        dispatch(setUser(user));
      });
    }
  });

  return (
    <div className="app__container">
      <ToastContainer />
      <Routes>
        <Route index element={!user._id ? <Auth /> : <NotAuthorized />} />
        <Route path="/home" element={user._id ? <Home /> : <NotAuthorized />} />
      </Routes>
    </div>
  );
}

export default App;
