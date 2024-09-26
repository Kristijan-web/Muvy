import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import Error from "./ui/Error";
import TestPage from "./ui/TestPage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/test",
          element: <TestPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
