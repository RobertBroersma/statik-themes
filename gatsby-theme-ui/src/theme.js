export const theme = {
  breakpoints: ['544px', '768px', '1012px', '1280px'],
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  fonts: {
    normal:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono:
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  colors: {
    bodytext: '#24292e',
    black: '#1b1f23',
    white: '#fff',
    blue: '#2fb7ed',
    gray: [
      '#fafafa',
      '#fcfcfc',
      '#e1e1e1',
      '#d1d1d1',
      '#bbbbbb',
      '#586069',
      '#444d56',
      '#2f363d',
      '#24292e',
    ],
    state: {
      error: '#d73a49',
      failure: '#d73a49',
      pending: '#dbab09',
      queued: '#dbab09',
      success: '#28a745',
      unknown: '#959da5',
    },
  },
  borders: [0, '1px solid'],
  lineHeights: [1, 1.2, 1.5],
  radii: [0, 3, 6],
  fontSizes: [12, 18, 20, 24, 30, 36, 40],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
}

export const breaks = {
  medium: `@media (min-width: ${theme.breakpoints[1]}px)`,
  large: `@media (min-width: ${theme.breakpoints[2]}px)`,
}
