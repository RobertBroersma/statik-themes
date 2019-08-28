const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

// 1. make sure data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'blog'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const basePath = options.basePath || '/'
  const { createPage } = actions

  const blogPost = require.resolve(`./src/templates/blog-post.js`)
  const blogPostList = require.resolve(`./src/templates/blog-post-list.js`)

  createPage({
    path: basePath,
    component: blogPostList,
  })

  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    reporter.panic('error loading posts', result.errors)
    return
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    reporter.info(`creating ${post.node.fields.slug}`)

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }, options) => {
  const basePath = options.basePath || '/'
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = `/${basePath}/${createFilePath({ node, getNode })}`.replace(
      /\/\/+/g,
      '/',
    )
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
