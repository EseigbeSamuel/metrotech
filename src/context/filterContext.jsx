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
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter products
  const filterProducts = (type) => {
    const updatedProducts =
      type === "all"
        ? productDB
        : productDB.filter((product) => product.type === type);

    // Apply search filtering on top of category filtering
    const finalProducts = updatedProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery)
    );

    setFilteredProducts(finalProducts);
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

  // Function to handle search input changes
  const updateSearchQuery = (term) => {
    setSearchQuery(term.toLowerCase()); // Convert to lowercase for case-insensitive matching

    // Filter products based on the search query
    const searchedProducts = productDB.filter((product) =>
      product.title.startsWith(term.toLowerCase())
    );

    // Apply category filtering on top of search
    setFilteredProducts(searchedProducts);
  };

  return (
    <FilterContext.Provider
      value={{
        filteredProducts,
        filterProducts,
        sortProducts,
        sortOption,
        searchQuery,
        updateSearchQuery,
      }}
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
