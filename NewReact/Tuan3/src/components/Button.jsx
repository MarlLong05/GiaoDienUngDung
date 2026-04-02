import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch Theme
    </button>
  );
}