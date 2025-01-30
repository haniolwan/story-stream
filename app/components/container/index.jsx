"use client";
import { useEffect } from "react";
import { useDarkTheme } from "@/app/context/DarkTheme";

const Container = ({ children }) => {
  const { isDark } = useDarkTheme();
  console.log(isDark);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return children;
};
export default Container;
