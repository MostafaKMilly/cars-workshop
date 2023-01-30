import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { MainLayout } from "@/layouts";
import { NoCardsOverlay, NotFoundCard } from "@/layouts/components";
import { PieceCard } from "@/pages/piece-card";

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
    element: <MainLayout />,
    loader: MainLayout.loader,
    children: [
      {
        element: <NoCardsOverlay />,
        index: true,
      },
      {
        path: "/piece-card",
        element: <PieceCard />,
      },
      {
        path: "*",
        element: <NotFoundCard />,
      },
    ],
  },
]);
