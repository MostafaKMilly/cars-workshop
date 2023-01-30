import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <></>,
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
