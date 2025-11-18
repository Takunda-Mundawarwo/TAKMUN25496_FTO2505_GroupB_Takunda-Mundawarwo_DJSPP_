import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";
import "../styles/Loading.css";
import { useTheme } from "../hooks/useTheme";

/**
 * A component to be displayed when data if being fetched, or other loading is occurring
 * @component
 * @example <caption>Basic Usage</caption>
 * <Loading />
 *
 * @returns {JSX.Element}
 */
export default function Loading() {
  const theme = useTheme((state) => state.theme);

  return (
    <div className="loading">
      <img
        src={theme === "light" ? LogoLight : LogoDark}
        alt="Echo Logo"
        width="48"
      />
    </div>
  );
}
