import "styled-components";

// and extend theme
declare module "styled-components" {
  export interface DefaultTheme {
    name: String;
    color: {
      input: {
        placeholder: string;
      };
      text: {
        body: string;
        primary: string;
        black_100: string;
        grey_100: string;
        black_40: string;
        disabled: string;
        placeholder: string;
      };
      background: string;
      button: {
        active: string;
        un_active: string;
      };
      tag: {
        background: string;
        text_active: string;
        background_active: string;
      };
      background_black: string;
      border: {
        black_40: string;
      };
      tab: {
        background_active: string;
        text_active: string;
      };
      status: {
        white: string;
        primary: string;
        gray1: string;
        gray2: string;
        gray3: string;
        blue: string;
        red: string;
        black: string;
        yellow: string;
        yellow_20: string;
        yellow_50: string;
        grey_20: string;
        grey_50: string;
        primary_50: string;
        grey_darkest: string;
        grey_dark: string;
      };
    };
  }
}
