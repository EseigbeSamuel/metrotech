// import React, { createContext } from 'react'
// const FilterContext=createContext()
// export const FilterProvider=({children}) => {

//   return (
//     <div>

//     </div>
//   )
// }
import React, { createContext, useContext, useState } from "react";
import { productDB } from "../database/productDB"; // Import your product data

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState(productDB || []);
  const [sortOption, setSortOption] = useState("");

  // Function to filter products
  const filterProducts = (type) => {
    if (type === "all") {
      setFilteredProducts(productDB); // Show all products
    } else {
      const filtered = productDB.filter((product) => product.type === type);
      setFilteredProducts(filtered);
    }
  };

  // Function to sort products
  const sortProducts = (option) => {
    setSortOption(option);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (option === "price-asc") return a.price - b.price; // Low to high
      if (option === "price-desc") return b.price - a.price; // High to low
      if (option === "name-asc") return a.name.localeCompare(b.name); // Alphabetically
      if (option === "name-desc") return b.name.localeCompare(a.name); // Reverse alphabetical
      return 0;
    });
    setFilteredProducts(sorted);
  };
  console.log("ip", productDB);
  console.log("fp", filteredProducts);
  return (
    <FilterContext.Provider
      value={{ filteredProducts, filterProducts, sortProducts, sortOption }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useOutclickContext must be used within a appprovider");
  }
  return context;
};
