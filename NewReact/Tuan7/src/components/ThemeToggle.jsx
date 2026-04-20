import { useRecoilState } from "recoil";
import { themeState } from "../themeState";

function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Đổi sang {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;