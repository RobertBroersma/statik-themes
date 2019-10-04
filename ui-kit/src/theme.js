/**
 * TODO: Make configurable in netlify cms
 */

export const theme = {
  breakpoints: ['768px', '1012px', '1280px'],
  sizes: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  fonts: {
    normal: 'Poppins',
    mono:
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
  colors: {
    primary: {
      50: '#FFDBFF',
      100: '#E3B8FF',
      200: '#C38FFF',
      300: '#A363FF',
      400: '#893EFF',
      500: '#6200EE',
      600: '#4F00E5',
      700: '#3B00DD',
      800: '#0700CF',
      900: '#0000A0',
    },
    secondary: {
      50: '#A7FFFA',
      100: '#71EFDF',
      200: '#03DAC4',
      300: '#00C4AA',
      400: '#00B396',
      500: '#00B396',
      600: '#009575',
      700: '#008464',
      800: '#007456',
      900: '#005738',
    },
    red: '#FF2D55',
    bodytext: '#000000',
    black: '#000000',
    white: {
      base: '#ffffff',
      darker: '#fafafa',
      dark: 'rgba(255, 255, 255, 0.6)',
      0: '#ffffff',
      100: '#fafafa',
      600: 'rgba(255, 255, 255, 0.6)',
    },
    gray: {
      100: 'rgba(0, 0, 0, 0.12)',
      400: 'rgba(0, 0, 0, 0.38)',
      500: 'rgba(0, 0, 0, 0.54)',
      600: 'rgba(0, 0, 0, 0.6)',
      700: 'rgba(0, 0, 0, 0.7)',
      800: 'rgba(0, 0, 0, 0.87)',
    },
  },
  lineHeights: [1, 1.2, 1.5],
  radii: [0, 2, 4],
  fontSizes: [12, 14, 16, 19, 23, 33, 46, 56, 93],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120],
  shadows: {
    small: '0 0px 2px rgba(0, 0, 0, 0.2)',
    normal: '0 4px 4px rgba(0, 0, 0, 0.25)',
    medium: '0 11px 15px rgba(0, 0, 0, 0.20)',
    large: '0 24px 38px rgba(0, 0, 0, 0.14)',
    xlarge: '0 9px 46px rgba(0, 0, 0, 0.12)',
  },
}

export const breaks = {
  medium: `@media (min-width: ${theme.breakpoints[1]}px)`,
  large: `@media (min-width: ${theme.breakpoints[2]}px)`,
}
