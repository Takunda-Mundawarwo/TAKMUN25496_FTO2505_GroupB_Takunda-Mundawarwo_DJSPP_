import ThemeToggle from "./ThemeToggle";

/**
 * The settings dropdown component, containing the theme settings
 *
 * @returns {JSX.Element} - The settings menu
 */
export function ProfileDropdown() {
  return (
    <ul className="dropdown glass">
      <li>
        Dark Mode <ThemeToggle />
      </li>
    </ul>
  );
}
