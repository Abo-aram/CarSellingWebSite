import DashBord from "./Pages/DashBord";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import "./index.css";

function App() {
  const RootLayout = () => (
    <div className="flex flex-row ">
      {/* This could be a header, navbar, or any layout you want */}
      <DashBord></DashBord>
      <HomePage></HomePage>

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
