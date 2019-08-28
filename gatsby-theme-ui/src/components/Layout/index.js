import React from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import { GlobalStyles } from '../../globalStyles'
import { H1, H2, H3, H4, Paragraph, Note } from '../../typography'
import { Code } from '../Code'
import { Video } from '../Video'
import { Box } from '../Box'
import { Blockquote } from '../Blockquote'
import { theme } from '../../theme'
import { InlineCode } from '../InlineCode'
import { List, ListItem } from '../List'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider
        components={{
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          p: Paragraph,
          ul: props => <List as="ul" {...props} />,
          ol: props => <List as="ol" {...props} />,
          li: ListItem,
          code: Code,
          inlineCode: InlineCode,
          figcaption: ({ children, ...rest }) => (
            <Box as="figcaption" css="text-align: center;" py={1}>
              <Note {...rest}>{children}</Note>
            </Box>
          ),
          blockquote: Blockquote,
          Blockquote,
          Video,
        }}
      >
        <Header />
        <GlobalStyles />
        <Box as="main" pt={8} pb={12}>
          {children}
        </Box>
        <Footer />
      </MDXProvider>
    </ThemeProvider>
  )
}
