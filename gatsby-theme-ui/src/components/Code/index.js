import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Code = ({ children, language = 'javascript' }) => (
  <SyntaxHighlighter language={language} style={atomDark}>
    {children}
  </SyntaxHighlighter>
)
