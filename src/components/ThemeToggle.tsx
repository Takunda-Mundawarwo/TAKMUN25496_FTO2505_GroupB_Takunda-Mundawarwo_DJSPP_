import { useTheme } from "../hooks/useTheme";
import LightMode from "../assets/light-mode.svg";
import DarkMode from "../assets/dark-mode.svg";
import "../styles/ThemeToggle.css";

/**
 * A switch component to toggle the app theme
 */
export default function ThemeToggle() {
  const theme = useTheme((state) => state.theme);
  const toggleTheme = useTheme((state) => state.toggleTheme);

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={toggleTheme}
        defaultChecked={theme === "dark"}
      />
      <span className="slider">
        <img src={DarkMode} aria-hidden="true"></img>
        <img src={LightMode} aria-hidden="true"></img>
      </span>
    </label>
  );
}
