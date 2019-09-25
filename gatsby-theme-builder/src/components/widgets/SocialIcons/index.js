import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialIcons as Component } from './component'

const GET_CONFIG = graphql`
  {
    allConfig {
      edges {
        node {
          socialMedia {
            link
            name
          }
        }
      }
    }
  }
`

export const SocialIcons = props => {
  const data = useStaticQuery(GET_CONFIG)
  const icons = data.allConfig.edges[0].node.socialMedia

  return <Component icons={icons} {...props} />
}
