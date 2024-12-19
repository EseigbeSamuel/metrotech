import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NavClickProvider } from "./context/navContext";
import { ThemeProvider } from "./context/themeContext";
import { CartProvider } from "./context/cartContext";
import { FilterProvider } from "./context/filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavClickProvider>
      <CartProvider>
        <FilterProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </FilterProvider>
      </CartProvider>
    </NavClickProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
