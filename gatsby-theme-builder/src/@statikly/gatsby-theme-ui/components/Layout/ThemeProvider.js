import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import { theme } from '@statikly/gatsby-theme-ui/src/theme'

export const ThemeProvider = props => (
  <SCThemeProvider theme={theme} {...props} />
)
