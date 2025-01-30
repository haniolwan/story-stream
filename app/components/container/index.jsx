"use client";
import { useEffect } from "react";
import { useDarkTheme } from "@/app/context/DarkTheme";

const Container = ({ children }) => {
  const { isDark } = useDarkTheme();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("dark", true);
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("dark", false);
    }
  }, [isDark]);
  return children;
};
export default Container;
