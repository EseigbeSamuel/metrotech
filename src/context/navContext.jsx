import React, { useState, useContext, createContext } from "react";

const NavClickContext = createContext();

export const NavClickProvider = ({ children }) => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState();

  const handleToggle = () => {
    setClick(!click);
  };
  const handleClose = () => {
    setClick(false);
  };
  const handleToggle2 = () => {
    setClick2(!click2);
  };
  const handleClose2 = () => {
    setClick2(false);
  };
  return (
    <NavClickContext.Provider
      value={{
        click,
        handleToggle,
        handleClose,
        click2,
        handleToggle2,
        handleClose2,
      }}
    >
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
