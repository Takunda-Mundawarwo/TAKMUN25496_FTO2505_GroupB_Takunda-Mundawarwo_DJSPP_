import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

//Set initial theme based on local storage || system preference
let initialTheme: "light" | "dark";
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  initialTheme = savedTheme;
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  initialTheme = prefersDark ? "dark" : "light";
}

/**
 * A custom hook for using the theme store
 *
 * @returns {UseBoundStore<StoreApi<ThemeState>>} - The store API to access the theme state
 */
export const useTheme = create<ThemeState>((set) => ({
  theme: initialTheme,
  toggleTheme: () => {
    set((state) => ({ theme: state.theme == "light" ? "dark" : "light" }));
  },
}));

useTheme.subscribe((state) => {
  localStorage.setItem("theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
});
