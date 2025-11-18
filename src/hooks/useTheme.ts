import { create } from "zustand";
import type { ThemeState } from "../types/types";
import { getInitalTheme } from "../utils/getInitialTheme";

/**
 * A custom hook for using the theme store
 *
 * @returns {UseBoundStore<StoreApi<ThemeState>>} - The store API to access the theme state
 */
export const useTheme = create<ThemeState>((set) => ({
  theme: getInitalTheme(),
  toggleTheme: () => {
    set((state) => ({ theme: state.theme == "light" ? "dark" : "light" }));
  },
}));

useTheme.subscribe((state) => {
  localStorage.setItem("theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
});
