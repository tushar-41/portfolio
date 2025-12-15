"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkMode) {
      document.querySelector("html").classList.add("dark");
    }
    return () => document.querySelector("html").classList.remove("dark");
  }, []);

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
