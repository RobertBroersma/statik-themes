const withDefaults = require('./withDefaults')

module.exports = opts => {
  const options = withDefaults(opts)

  return {
    plugins: [
      {
        // keep as first gatsby-source-filesystem plugin for gatsby image support
        resolve: 'gatsby-source-filesystem',
        options: {
          path: options.staticPath,
          name: 'uploads',
        },
      },
      {
        resolve: 'gatsby-theme-netlify-cms',
        options: {
          htmlTitle: 'Statik CMS',
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels) of
                // the content container as this plugin uses this as the
                // base for generating different widths of each image.
                maxWidth: 1920,
              },
            },
          ],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: options.pagesPath,
          name: 'pages',
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: options.portfolioPath,
          name: 'portfolio',
        },
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: ({ node }) => console.log(node.name) || node.name,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.configPath,
          name: 'config',
        },
      },
    ],
  }
}
