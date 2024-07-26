type color = 'main' | 'basic';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in color]: string;
    };
  }
}
