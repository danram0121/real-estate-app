import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import Login from "./routes/login/login";
import ListDetail from "./routes/listDetail/listDetail";
import profilePage from "./routes/profilePage/profilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/:id",
          element: <ListDetail />,
        },
        {
          path: "/profile",
          element: <profilePage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
