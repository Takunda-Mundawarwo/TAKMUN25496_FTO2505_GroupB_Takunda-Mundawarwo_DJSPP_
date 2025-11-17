import { useTheme } from "../stores/themeStore";
import Light from "../assets/light-mode.svg";
import Dark from "../assets/dark-mode.svg";

export default function ThemeToggle() {
  const theme = useTheme((state) => state.theme);
  const toggleTheme = useTheme((state) => state.toggleTheme);

  return (
    <button className="ThemeToggle" onClick={toggleTheme}>
      <p>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light mode"}
      </p>
      <img
        src={theme === "light" ? Dark : Light}
        alt={theme === "light" ? "Switch to dark Mode" : "Switch to light mode"}
        className="theme"
      />
    </button>
  );
}
