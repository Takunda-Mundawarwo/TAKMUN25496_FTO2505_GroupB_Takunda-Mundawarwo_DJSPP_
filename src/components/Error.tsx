import type { CSSProperties } from "react";
import { useTheme } from "../hooks/useTheme";
import LogoLight from "../assets/logo-light.svg";
import LogoDark from "../assets/logo-dark.svg";

/**
 * A component that alerts the user to an error
 * @component
 * @example <caption>Basic Usage</caption>
 * <Error message="Error Loading data" />
 * @returns {JSX.Element}
 */
export default function Error(props: { message: string }) {
  const theme = useTheme((state) => state.theme);

  return (
    <div style={errorStyles}>
      <img
        src={theme === "light" ? LogoLight : LogoDark}
        alt="Echo Logo"
        width="46"
      />
      <h1>{props.message ? props.message : "Something went wrong..."}</h1>
    </div>
  );
}

const errorStyles: CSSProperties = {
  height: "calc(100vh - 6.25rem)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "1rem",
};
