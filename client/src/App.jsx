import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

// Layout for public and private routes
const AppLayout = () => {
  return <Outlet />;
};

const PrivateRoute = () => {
  const authToken = localStorage.getItem("authToken");
  return authToken ? <Outlet /> : <Navigate to="/" />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
