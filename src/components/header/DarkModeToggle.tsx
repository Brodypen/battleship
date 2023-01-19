import React from "react";
export const ThemeContext = React.createContext("dark");
const DarkModeToggle = () => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    console.log("working", theme);
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (<button className="p-7 bg-slate-500 shadow-sm text-white font-serif" onClick={toggleTheme}>
    Good DarkMode Button
  </button>);
};

export default DarkModeToggle;
