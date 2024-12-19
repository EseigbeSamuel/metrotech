import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import Layout from "../layout";
import ProductDetails from "../pages/productDetails";
import ProductList from "../pages/productList";
import Cart from "../pages/cart";
import { CartProvider } from "../context/cartContext";
import { FilterProvider } from "../context/filterContext";

export default function Route() {
  const routes = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "*", element: <h1>error 404</h1> },
        { path: "/Product/:id", element: <ProductDetails /> },
        { path: "/exe", element: <ProductDetails /> },
        { path: "/product", element: <ProductList /> },
      ],
    },
    { path: "/cart", element: <Cart /> },
    // { path: "/", element: <Home /> },

    // { path: "*", element: <h1>error 404</h1> },
  ]);
  return (
    <div>
      <FilterProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </FilterProvider>
    </div>
  );
}
