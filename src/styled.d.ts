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
      defaultLigth: string;
      defaultDark: string;
      bg: string;
      font: string;
    };
    heigthUserPanel: string;

    media: {
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
    };
  }
}
