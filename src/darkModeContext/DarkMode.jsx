"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((prev) => {
      const newTheme = !prev;
      document.querySelector("html").classList.toggle("dark", newTheme);
      return newTheme;
    });
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
