import DashBord from "./Pages/DashBord";
import HomePage from "./Pages/HomePage";
import Offers from "./Pages/offers";
import Inventory from "./Pages/inventory";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SellYourCar from "./Pages/SellYourCar"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import "./App.css";
import "./index.css";

function App() {
  const RootLayout = () => (
    <div className="flex flex-row ">
      {/* This could be a header, navbar, or any layout you want */}
      <DashBord></DashBord>
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/Offers",
          element: <Offers />,
        },
        {
          path: "/SellYourCar",
          element: <SellYourCar/>,
        },
        {
          path: "/AboutUs",
          element: <AboutUs />,
        },
        {
          path: "/ContactUs",
          element: <ContactUs />,
        },
        {
          path: "/Inventory",
          element: <Inventory/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
