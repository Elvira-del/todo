import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      disabled: string;

      font: string;
    };

    media: {
      medium: string;
      small: string;
    };

    sizes: {
      container: { maxWidth: string };
      header: { height: string };
      footer: { height: string };
      task: { minWidth: string };
    };

    align: {
      center: string;
    };

    border: {
      radius: string;
    };

    durations: {
      ms300: string;
    };
  }
}
