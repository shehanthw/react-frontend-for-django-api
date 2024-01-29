import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import User from "../pages/user/User";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import { ReactNode } from "react";

const protectedRoute = (element: ReactNode) => {
  return localStorage.getItem("isAuthenticated") === "true" ? element : <Login/>;
};

const protectedRouteForLogin = (element: ReactNode) => {
  return localStorage.getItem("isAuthenticated") != "true" ? element : <Main/>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: protectedRoute(<Main/>),
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/users",
        element: <User></User>
      }
    ]
  },
  {
    path: "/login",
    "element": protectedRouteForLogin(<Login/>)
  },
  {
    path: "/register",
    "element": protectedRouteForLogin(<Register/>)
  }

])

export default router;