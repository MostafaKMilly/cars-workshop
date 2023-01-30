import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
