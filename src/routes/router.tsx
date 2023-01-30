import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <></>,
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
