const path = require('path')
const fs = require('fs')
const withDefaults = require('./withDefaults')

const gql = x => x

exports.onPreBootstrap = ({ reporter }, options) => {
  const { pagesPath, portfolioPath, configPath, staticPath } = withDefaults(
    options,
  )

  if (!fs.existsSync(pagesPath)) {
    reporter.info(`creating the ${pagesPath} directory`)
    fs.mkdirSync(pagesPath)
  }

  if (!fs.existsSync(portfolioPath)) {
    reporter.info(`creating the ${portfolioPath} directory`)
    fs.mkdirSync(portfolioPath)
  }

  if (!fs.existsSync(staticPath)) {
    reporter.info(`creating the ${staticPath} directory`)
    fs.mkdirSync(staticPath, { recursive: true })
  }

  if (!fs.existsSync(configPath)) {
    reporter.info(`creating the ${configPath} directory`)
    fs.mkdirSync(configPath, { recursive: true })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = gql`
    type BuilderPage implements Node {
      id: ID!
      content: [Block!]
    }

    interface Block {
      id: ID!
    }

    type Header30 implements Block {
      id: ID!
      title: String!
      body: String!
      icon: String!
    }

    # type MarkdownRemark implements BuilderPage & Node {
    #   id: ID!
    #   content: [Block!]
    # }
  `

  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.allMarkdownRemark.edges

  pages.forEach(edge => {
    const id = edge.node.id

    createPage({
      path: edge.node.frontmatter.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `${__dirname}/src/templates/${String(
          edge.node.frontmatter.templateKey,
        )}/index.js`,
      ),
      // additional data can be passed via context
      context: {
        id,
      },
    })
  })
}

/**
 * Move to plugin
 */
const makeRelative = require(`./make-relative`)

const walkObject = async (obj, iteratee, ignoreKeys = []) => {
  for (let prop in obj) {
    if (ignoreKeys.indexOf(prop) !== -1) {
      continue
    }

    switch (typeof obj[prop]) {
      case 'array':
        obj[prop] = await walkArray(obj[prop], iteratee, ignoreKeys)
        break
      case 'object':
        obj[prop] = await walkObject(obj[prop], iteratee, ignoreKeys)
        break
      default:
        obj[prop] = await iteratee(obj[prop])
    }
  }

  return obj
}

const walkArray = async (arr, iteratee, ignoreKeys = []) => {
  return arr.map(async i => {
    let result

    switch (typeof i) {
      case 'array':
        result = await walkArray(i, iteratee, ignoreKeys)
        break
      case 'object':
        result = await walkObject(i, iteratee, ignoreKeys)
        break
      default:
        result = await iteratee(i)
    }

    return result
  })
}

const crypto = require('crypto')
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId },
  options,
) => {
  const { createNode, createParentChildLink } = actions

  const commonProps = ['id', '_PARENT', 'parent', 'children', 'internal']

  let nodeAbsPath

  const iteratee = async val => {
    return await makeRelative(nodeAbsPath, val, options)
  }

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    nodeAbsPath = node.fileAbsolutePath

    if (typeof node.frontmatter === `object`) {
      await walkObject(node.frontmatter, iteratee, commonProps)
    }
  } else if (/^\w+(Yaml|Json)$/.test(node.internal.type)) {
    nodeAbsPath = getNode(node.parent).absolutePath

    await walkObject(node, iteratee, commonProps)
  }

  if (node.internal.type === `MarkdownRemark`) {
    // console.log('The one', node.frontmatter.content)
    const parent = getNode(node.parent)
    createNode({
      // ...node,
      content: node.frontmatter.content,
      // Required fields.
      id: createNodeId(`${node.id} >>> BuilderPage`),
      parent: node.id,
      children: [],
      internal: {
        type: `BuilderPage`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node))
          .digest(`hex`),
        content: JSON.stringify(node),
        description: `Builder Page`,
      },
    })

    createParentChildLink({
      parent: parent,
      child: node,
    })
  }
}
