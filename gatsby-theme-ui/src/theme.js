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
    bold: 600,
  },
  colors: {
    bodytext: '#24292e',
    black: '#1b1f23',
    white: '#fff',
    gray: ['#F9FAFB', '#F4F6F8', '#DFE3E8', '#C4CDD5'],
    blackfade15: 'rgba(27, 31, 35, 0.15)',
    blackfade20: 'rgba(27, 31, 35, 0.20)',
    blackfade35: 'rgba(27, 31, 35, 0.35)',
    blackfade50: 'rgba(27, 31, 35, 0.5)',
    whitefade15: 'rgba(255, 255, 255, 0.15)',
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
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48],
  lineHeights: {
    condensedUltra: 1,
    condensed: 1.25,
    default: 1.5,
  },
  radii: [0, 3, 6],
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    formControl: 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    formControlFocus: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em',
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128],
}

export const breaks = {
  medium: `@media (min-width: ${theme.breakpoints[1]}px)`,
  large: `@media (min-width: ${theme.breakpoints[2]}px)`,
}
