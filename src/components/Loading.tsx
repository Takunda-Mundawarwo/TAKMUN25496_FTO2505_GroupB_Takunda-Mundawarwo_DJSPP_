import Logo from "../assets/echo-logo.svg";
import "../styles/Loading.css";

/**
 * A component to be displayed when data if being fetched, or other loading is occurring
 * @component
 * @example <caption>Basic Usage</caption>
 * <Loading />
 *
 * @returns {JSX.Element}
 */
export default function Loading() {
  return (
    <div className="loading">
      <img src={Logo} alt="Echo Logo" width="48" />
    </div>
  );
}
