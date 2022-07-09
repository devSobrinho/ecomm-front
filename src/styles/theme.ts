export const theme: Theme = {
  colors: {
    primaryBlue: '#40BFFF',
    neutralLight: '#EBF0FF',
    neutralDark: '#223263',
    primaryRed: '#FB7181',
    primaryYellow: '#FFC833;',
    primarySoftGrey: '#D1D6E8',
    primaryPurple: '#5C61F4',
    primaryGreen: '#53D1B6',
    gray: '#999999',
    gray2: '#9098B1',
    grayLight: '#DFDEDE',
    grayLight2: '#F6F7F8',
    blackText: '#393939',
    white: '#FFFFFF',
    // grayDark: "string;",
    // secondary: "string;",
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      primary: "'Poppins', sans-serif",
      secondary: "'Montserrat', sans-serif",
      alternative: "'Raleway', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteLarge: '(max-width: 1700px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
};

export type Theme = {
  colors: {
    neutralLight: string;
    neutralDark: string;
    primaryBlue: string;
    primaryRed: string;
    primaryYellow: string;
    primarySoftGrey: string;
    primaryPurple: string;
    primaryGreen: string;
    gray: string;
    gray2: string;
    grayLight: string;
    grayLight2: string;
    // grayDark: string;
    // secondary: string;
    white: string;
    blackText: string;

    // black: string;
    // gray700: string;
    // gray500: string;
  };
  font: {
    family: {
      default: string;
      primary: string;
      secondary: string;
      alternative: string;
    };
    sizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  };
  media: {
    lteMedium: string;
    lteLarge: string;
  };
  spacings: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    huge: string;
    xhuge: string;
  };
};
