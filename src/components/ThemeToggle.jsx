import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 text-sm border rounded shadow bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
    >
      {dark ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
