import { useTheme } from "../hooks/useTheme";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";
import ProfileLight from "../assets/profile-light.svg";
import ProfileDark from "../assets/profile-dark.svg";
import "../styles/HomeLayout.css";
import { ProfileDropdown } from "./ProfileDropdown";
import { useState } from "react";

export function HomeLayout() {
  const [showMenu, setShowMenu] = useState(false);
  const theme = useTheme((state) => state.theme);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      <header className="headerContainer ">
        <div className="headerTitle">
          <img
            src={theme === "light" ? LogoLight : LogoDark}
            alt="Echo Logo"
            width="48"
          />
          <h1>Echo</h1>
        </div>
        <img
          src={theme === "light" ? ProfileLight : ProfileDark}
          alt="Profile Settings"
          width="48"
          onClick={toggleMenu}
        />
      </header>
      {showMenu && <ProfileDropdown />}
    </>
  );
}
