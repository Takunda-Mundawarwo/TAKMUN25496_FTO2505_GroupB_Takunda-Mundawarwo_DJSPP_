import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { ProfileDropdown } from "./ProfileDropdown";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";
import ProfileLight from "../assets/profile-light.svg";
import ProfileDark from "../assets/profile-dark.svg";
import "../styles/HomeLayout.css";

/**
 * A component which provides the layout structure for the nest routes to the home and favourties page
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Route path="/" element={<HomeLayout />}>
 *    <Route index element={<Home />} />
 *    <Route path="/favourites" element={<Favourites />} />
 * </Route>
 *
 * @returns {JSX.Element} - The Favourites/Home page Layout structure
 */
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

      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <h2>Home</h2>
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
