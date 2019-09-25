import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'

import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { theme } from '@statikly/ui-kit'

import { components } from '../../components'

export const PageTemplate = ({ pageComponents }) => {
  if (!pageComponents) return 'No components configured'

  return pageComponents.map((c, index) => {
    const C = components[c.type][c.type]
    return <C key={index} {...c} />
  })
}

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,500,600,700,800&display=swap');
`

function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>
        <>
          <GlobalStyles />
          {children}
        </>
      </StyleSheetManager>
    )
  )
}

function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  )
}

const PagePreview = ({ entry, widgetFor }) => {
  const pageComponents = entry.getIn(['data', 'content'])
  return (
    <ThemeProvider theme={theme}>
      <PageTemplate
        title={entry.getIn(['data', 'title'])}
        pageComponents={pageComponents ? pageComponents.toJS() : []}
      />
    </ThemeProvider>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default withStyledComponentsRendered(PagePreview)
