import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { theme } from '../../theme'

export const ThemeProvider = props => {
  return <SCThemeProvider theme={theme} {...props} />
}
