import React from 'react'
import { graphql } from 'gatsby'
import { ProductTemplate as Component } from './component'
import { SEO } from '../../components/SEO'
import { ShopContext } from '../../ShopContext'

const Product = ({ data }) => {
  const { product, shopSettings } = data

  const { addToCart } = React.useContext(ShopContext)

  return (
    <>
      <SEO productData={product} shopSettings={shopSettings} />
      <Component
        product={product}
        shopSettings={shopSettings}
        onAddToCart={() => addToCart(product)}
      />
    </>
  )
}

export default Product

export const ProductQuery = graphql`
  query Product($id: String!) {
    product(id: { eq: $id }) {
      id
      sku
      title
      description
      available
      categories
      price
      tags
      images {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      variants {
        id
        available
        price
        title
      }
    }

    shopSettings {
      name
      currency
    }
  }
`
