import { useAudioStore } from "../hooks/useAudio";
import ThemeToggle from "./ThemeToggle";

/**
 * The settings dropdown component, containing the theme settings
 *
 * @returns {JSX.Element} - The settings menu
 */
export function ProfileDropdown() {
  const clearHistory = useAudioStore((state) => state.clearHistory);

  return (
    <ul className="dropdown glass">
      <li>
        Dark Mode <ThemeToggle />
      </li>
      <li onClick={clearHistory}>Clear Listening History 🚮</li>
    </ul>
  );
}
