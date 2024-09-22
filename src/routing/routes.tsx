import { createBrowserRouter } from "react-router-dom";
import HomeContent from "../components/HomeContent";
import HomePage from "../components/Pages/HomePage";
import GameListPage from "../components/Pages/GameListPage";
import GameDetailPage from "../components/Pages/GameDetailPage";
import ErrorPage from "../components/Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeContent /> },
      { path: "games", element: <GameListPage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
