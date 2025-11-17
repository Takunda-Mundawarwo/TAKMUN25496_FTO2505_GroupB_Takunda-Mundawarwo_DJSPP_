import ThemeToggle from "./ThemeToggle";

/**
 * The Dropdown profile menu, containing the theme settings
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
