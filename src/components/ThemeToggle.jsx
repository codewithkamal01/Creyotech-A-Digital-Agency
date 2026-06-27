import { useEffect } from "react";
import assets from "../assets/assets";

function ThemeToggle({ theme, setTheme }) {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (!theme) {
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, [theme, setTheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button>
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          className="size-8 rounded-full border border-border-dark p-1.5"
          src={assets.sun_icon}
          alt=""
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          className="size-8 rounded-full border border-border-dark p-1.5"
          src={assets.moon_icon}
          alt=""
        />
      )}
    </button>
  );
}

export default ThemeToggle;
