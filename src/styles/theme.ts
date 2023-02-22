import { DefaultTheme } from "styled-components";

export const baseTheme: DefaultTheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#152b3c",
    success: "#2f906a",
    disabled: "rgba(121, 134, 203, 0.7)",

    font: "#2b2b2b",
  },

  media: {
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },

  // in px
  sizes: {
    container: { maxWidth: 1400 },
    header: { height: 60 },
    footer: { height: 60 },
    task: { minWidth: 250 },
  },

  align: {
    center: "0 auto",
  },

  border: {
    radius: 10,
  },

  // in ms
  durations: {
    ms300: 300,
  },
};
