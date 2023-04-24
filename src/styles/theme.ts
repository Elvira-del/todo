import { DefaultTheme } from "styled-components";

export const baseTheme: DefaultTheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#152b3c",
    success: "#2f906a",
    disabled: "rgba(121, 134, 203, 0.7)",

    font: "#2b2b2b",
  },

  fonts: {
    main: "Montserrat, sans-serif",
    title: "EB Garamond, serif",
  },

  media: {
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },

  sizes: {
    container: { maxWidth: "1400px" },
    header: { height: "60px" },
    footer: { height: "60px" },
    task: { minWidth: "250px" },
  },

  align: {
    center: "0 auto",
  },

  border: {
    radius: "10px",
  },

  durations: {
    ms300: "300ms",
  },
};
