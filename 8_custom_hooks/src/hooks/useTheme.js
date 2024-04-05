// useTheme.js
import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { onToggleTheme, isDarkTheme };
};

export default useTheme;