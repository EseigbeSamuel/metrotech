import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import Layout from "../layout";
import ProductDetails from "../pages/productDetails";

export default function Route() {
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
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
