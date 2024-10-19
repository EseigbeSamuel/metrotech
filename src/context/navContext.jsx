import React, { useState, useContext, createContext } from "react";

const NavClickContext = createContext();

export const NavClickProvider = ({ children }) => {
  const [click, setClick] = useState(false);

  const handleToggle = () => {
    setClick(!click);
  };
  const handleClose = () => {
    setClick(false);
  };
  return (
    <NavClickContext.Provider value={{ click, handleToggle, handleClose }}>
      {children}
    </NavClickContext.Provider>
  );
};

export const useNavClickContext = () => {
  const context = useContext(NavClickContext);

  if (!context) {
    throw new Error("useOutclickContext must be used within a appprovider");
  }
  return context;
};
