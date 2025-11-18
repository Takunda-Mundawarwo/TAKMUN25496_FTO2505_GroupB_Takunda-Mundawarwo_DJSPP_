import type { Theme } from "../types/types";

/**
 * Gets the theme when the app first mounts & sets it on the document
 *
 * @returns {Theme}
 */
export function getInitalTheme(): Theme {
  let initialTheme: "light" | "dark";

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    initialTheme = savedTheme;
    document.documentElement.setAttribute("data-theme", initialTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    initialTheme = prefersDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", initialTheme);
  }

  return initialTheme;
}
