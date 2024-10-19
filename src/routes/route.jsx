import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import Layout from "../layout";
import { useThemeContext } from "../context/themeContext";
import ProductDetails from "../pages/productDetails";

export default function Route() {
  const { theme } = useThemeContext();
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "*", element: <h1>error 404</h1> },
        { path: "/allProduct/:id", element: <ProductDetails /> },
      ],
    },
    // { path: "/", element: <Home /> },

    // { path: "*", element: <h1>error 404</h1> },
  ]);
  return (
    <div
      className={` ${
        theme === "dark"
          ? "bg-slate-800 text-white border-white"
          : "bg-white text-black border-black"
      }`}
    >
      <RouterProvider router={routes} />
    </div>
  );
}
