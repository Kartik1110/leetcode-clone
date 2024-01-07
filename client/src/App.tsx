import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./components/SignIn";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import "./index.css";
import ProblemsListPage from "./pages/ProblemsListPage";
import SignUp from "./components/SignUp";
import ProblemPage from "./pages/ProblemPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/problems",
          element: <ProblemsListPage />,
        },
        {
          path: "/problem/:id",
          element: <ProblemPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
