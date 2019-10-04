const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Product implements Node {
      id: ID!
      sku: String!
      title: String!
      images: [File!]
      description: String
      available: Boolean!
      tags: [String]!
      categories: [String!]
      price: Float!
      brand: String
      variants: [Variant!]
    }

    type Variant {
      id: ID!
      title: String!
      available: Boolean!
      price: Float!
    }

    type ShopSettings implements Node {
      name: String!
      currency: String!      
    }
  `

  createTypes(typeDefs)
}

function makeSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

exports.createPages = async ({ actions, graphql }, options) => {
  const { createPage } = actions

  const productTemplate = path.resolve(
    `${__dirname}/src/templates/Product/index.js`,
  )
  const homeTemplate = path.resolve(`${__dirname}/src/templates/Home/index.js`)
  const cartTemplate = path.resolve(`${__dirname}/src/templates/Cart/index.js`)
  const thanksTemplate = path.resolve(
    `${__dirname}/src/templates/Thanks/index.js`,
  )

  const result = await graphql(`
    {
      allProduct {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.allProduct.edges

  pages.forEach(edge => {
    const id = edge.node.id

    const slug = makeSlug(edge.node.title)

    createPage({
      path: `${options.shopPrefix || '/'}/product/${slug}`.replace(
        /\/\/+/,
        '/',
      ),
      component: productTemplate,
      context: {
        id,
      },
    })
  })

  /**
   * Create Shop Home Page
   */
  createPage({
    path: `${options.shopPrefix || '/'}/`.replace(/\/\/+/, '/'),
    component: homeTemplate,
  })

  /**
   * Create Shop Cart Page
   */
  createPage({
    path: `${options.shopPrefix || '/'}/cart`.replace(/\/\/+/, '/'),
    component: cartTemplate,
  })

  /**
   * Create Shop Thanks Page
   */
  createPage({
    path: `${options.shopPrefix || '/'}/thanks`.replace(/\/\/+/, '/'),
    component: thanksTemplate,
  })
}
