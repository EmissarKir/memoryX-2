import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLigth: string;
      accentDark: string;
      accentLigth: string;
      textDark: string;
      bgDanger: string;
      bgSuccess: string;
      defaultLigth: string;
      defaultDark: string;
      bg: string;
      font: string;
    };
    buttons: {
      buttonHeigth: string;
      buttonSpace: string;
      buttonFontSize: string;
    };
    heigthUserPanel: string;
    heigthControlPanel: string;
    widthSidebar: string;

    controlRadius: string;
    controlTypoPrimary: string;
    controlTypoBgPrimary: string;
    controlTypoAccent: string;
    controlTypoBgAccent: string;
    controlTypoClear: string;
    controlTypoGhost: string;
    controlTypoBgGhost: string;
    controlTypoSecondary: string;

    controlHeightXS: string;
    controlTextSizeXS: string;
    controlSpaceXS: string;

    controlHeightS: string;
    controlTextSizeS: string;
    controlSpaceS: string;

    controlHeightM: string;
    controlTextSizeM: string;
    controlSpaceM: string;

    controlHeightL: string;
    controlTextSizeL: string;
    controlSpaceL: string;

    controlHeightXL: string;
    controlTextSizeXL: string;
    controlSpaceXL: string;

    iconIndent: string;

    fontWeightTextRegular: number;

    fontColorPrimary: string;
    fontColorSecondary: string;
    fontColorAccent: string;

    media: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
    };
    order: {
      sidebar: number;
      backDrop: number;
    };
  }
}
