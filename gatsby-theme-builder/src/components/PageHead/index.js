import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { components } from '../'

const GET_HEAD = graphql`
  {
    allHead {
      edges {
        node {
          content {
            menuItems {
              page
              title
            }
            type
          }
        }
      }
    }
  }
`

export const PageHead = () => {
  const data = useStaticQuery(GET_HEAD)
  const pageComponents = data.allHead.edges[0].node.content

  return pageComponents.map((c, index) => {
    const C = components[c.type].default
    return <C key={index} {...c} />
  })
}
