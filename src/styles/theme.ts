import { DefaultTheme } from "styled-components";

export const baseTheme: DefaultTheme = {
  colors: {
    primary: "#415167",
    accentDark: "#C7A17A",
    accentLigth: "#F9F5E8",
    textDark: "#151D28",
    primaryLigth: "#fff",
    defaultLigth: "#EEF0F3",
    defaultDark: "grey",
    // "#EDF0F5",
    bg: "#E5E4E8",
    font: "#151D28",
  },
  heigthUserPanel: "100px",

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },

  // // in px
  // sizes: {
  //   header: { height: 56 },
  //   container: { width: 1200 },
  //   footer: { height: 128 },
  //   modal: { width: 540 },
  // },

  // // in ms
  // durations: {
  //   ms300: 300,
  // },

  // // z-index
  // order: {
  //   header: 50,
  //   modal: 100,
  // },
};
