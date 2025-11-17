import { create } from "zustand";

interface ThemeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

let initialTheme: "light" | "dark";

//Set initial theme based on local storage || system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light" || savedTheme === "dark") {
  initialTheme = savedTheme;
} else {
  // Detect system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  initialTheme = prefersDark ? "dark" : "light";
}

export const useTheme = create<ThemeState>((set) => ({
  theme: initialTheme,
  toggleTheme: () => {
    set((state) => ({ theme: state.theme == "light" ? "dark" : "light" }));
  },
}));

useTheme.subscribe((state) => {
  localStorage.setItem("theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
  //does this fire immediately?
});
