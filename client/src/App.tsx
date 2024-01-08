import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/SignIn';
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import './index.css';
import ProblemsListPage from './pages/ProblemsListPage';
import SignUp from './components/SignUp';
import ProblemPage from './pages/ProblemPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/login',
          element: <SignIn />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/problems',
          element: <ProblemsListPage />,
        },
        {
          path: '/problem/:id',
          element: <ProblemPage />,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
