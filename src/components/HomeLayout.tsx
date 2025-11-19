import { NavLink, Outlet } from "react-router-dom";
import "../styles/HomeLayout.css";
import { Header } from "./Header";

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
  return (
    <>
      <Header />

      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <h2>Home</h2>
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <h2>Favourites</h2>
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}
