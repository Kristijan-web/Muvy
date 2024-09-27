import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import Error from "./ui/Error";
import StarContainer from "./ui/StarContainer";

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
          element: <StarContainer />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
