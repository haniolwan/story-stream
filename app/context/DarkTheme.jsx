"use client";
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const savedTheme = window.localStorage.getItem("dark");
  if (
    savedTheme === undefined &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // is default theme dark?
    defaultIsDark = true;
  }
  let defaultIsDark = savedTheme === "true";

  const [isDark, setIsDark] = useState(defaultIsDark);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useDarkTheme must be used within a ThemeProvider");
  }
  return context;
};
