import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: Login.loader,
    action: Login.action,
  },
  {
    path: "/signup",
    element: <Signup />,
    loader: Signup.loader,
    action: Signup.action,
  },
  {
    path: "/",
    element: <></>,
    children: [
      {
        element: <></>,
        index: true,
      },
      {
        path: "/equipment-card",
        element: <></>,
      },
      {
        path: "*",
        element: <></>,
      },
    ],
  },
]);
