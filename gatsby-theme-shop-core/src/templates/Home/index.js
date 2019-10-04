import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { HomeTemplate } from './component'

const GET_PRODUCTS = graphql`
  {
    allProduct {
      edges {
        node {
          id
          title
          price
          tags
          description
          categories
          available
          variants {
            available
            price
            id
            title
          }
        }
      }
    }
  }
`

export const Home = () => {
  const data = useStaticQuery(GET_PRODUCTS)

  return <HomeTemplate products={data.allProduct.edges} />
}

export default Home
