import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;

      font: string;
    };

    media: {
      medium: string;
      small: string;
    };

    sizes: {
      container: { maxWidth: number };
      header: { height: number };
      footer: { height: number };
      task: { minWidth: number };
    };

    align: {
      center: string;
    };

    border: {
      radius: number;
    };

    durations: {
      ms300: number;
    };
  }
}
