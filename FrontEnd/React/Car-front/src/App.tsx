import DashBord from "./Pages/DashBord";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import "./index.css";

function App() {
  const RootLayout = () => (
    <div>
      {/* This could be a header, navbar, or any layout you want */}

      <HomePage></HomePage>
      <DashBord></DashBord>
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
