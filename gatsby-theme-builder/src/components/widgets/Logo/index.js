import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Logo as Component } from './component'

const GET_THEME = graphql`
  {
    allTheme {
      edges {
        node {
          logo
        }
      }
    }
  }
`

export const Logo = () => {
  const data = useStaticQuery(GET_THEME)
  const { logo } = data.allTheme.edges[0].node

  return <Component src={logo} />
}
