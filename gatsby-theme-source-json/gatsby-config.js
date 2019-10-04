const path = require('path')

module.exports = options => ({
  plugins: [
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node }) => `${node.sourceInstanceName}Json`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.productsFolder,
        name: 'Products',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.settingsFolder || `_shop`,
        name: 'Settings',
      },
    },
  ],
})
