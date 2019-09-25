import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Image } from '@statikly/gatsby-theme-ui/src/components/Image'

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

  return (
    <Link to="/">
      <Image src={logo} alt="Logo" />
    </Link>
  )
}
