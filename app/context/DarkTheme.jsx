"use client";
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  let defaultIsDark = false;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // is default theme dark?
    defaultIsDark = true;
  }

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
