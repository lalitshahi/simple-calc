import { createContext } from "react";

export const themes = {
  light: {
    foreground: "#f0f0f0",
    background: "#fff",
    text: "#000",
  },
  dark: {
    foreground: "#666",
    background: "#000",
    text: "#fff",
  },
};

export const ThemeContext = createContext(themes.dark);
