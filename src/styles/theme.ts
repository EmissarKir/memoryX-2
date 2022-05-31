import { DefaultTheme } from "styled-components";

export const baseTheme: DefaultTheme = {
  colors: {
    primary: "#415167",
    accentDark: "#C7A17A",
    accentLigth: "#F9F5E8",
    textDark: "#151D28",
    bgDanger: "#FF7985",
    bgSuccess: "#5FDBA7",
    primaryLigth: "#fff",
    defaultLigth: "#EEF0F3",
    defaultDark: "grey",
    // "#EDF0F5",
    bg: "#E5E4E8",
    font: "#151D28",
  },
  buttons: {
    buttonHeigth: "40px",
    buttonSpace: "20px",
    buttonFontSize: "16px",
  },
  heigthUserPanel: "100px",
  heigthHeaderPage: "80px",
  widthSidebar: "300px",

  controlRadius: "5px",

  controlTypoPrimary: "#fff",
  controlTypoBgPrimary: "#C7A17A",
  controlTypoAccent: "#fff",
  controlTypoBgAccent: "#415167",
  controlTypoClear: "gray",
  controlTypoGhost: "#415167",
  controlTypoBgGhost: "#EEF0F3",
  controlTypoSecondary: "#C7A17A",

  controlHeightXS: "24px",
  controlTextSizeXS: "12px",
  controlSpaceXS: "12px",

  controlHeightS: "32px",
  controlTextSizeS: "14px",
  controlSpaceS: "16px",

  controlHeightM: "40px",
  controlTextSizeM: "16px",
  controlSpaceM: "20px",

  controlHeightL: "48px",
  controlTextSizeL: "18px",
  controlSpaceL: "24px",

  controlHeightXL: "60px",
  controlTextSizeXL: "24px",
  controlSpaceXL: "30px",

  iconIndent: "10px",
  fontWeightTextRegular: 400,

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
