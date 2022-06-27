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
    bg: "#E5E4E8",
    font: "#151D28",
  },
  buttons: {
    buttonHeigth: "40px",
    buttonSpace: "20px",
    buttonFontSize: "16px",
  },
  heigthUserPanel: "100px",
  heigthControlPanel: "80px",
  widthSidebar: "300px",

  controlRadius: "5px",

  controlTypoPrimary: "#fff",
  controlTypoBgPrimary: "#C7A17A",
  controlTypoAccent: "#fff",
  controlTypoBgAccent: "#415167",
  controlTypoClear: "#C7A17A",
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

  fontColorPrimary: "#415167",
  fontColorSecondary: "rgba(0, 32, 51, 0.6);",
  fontColorAccent: "#C7A17A",

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },
  // z-index
  order: {
    sidebar: 999,
    backDrop: 998,
  },
};
