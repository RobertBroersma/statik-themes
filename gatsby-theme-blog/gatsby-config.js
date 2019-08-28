module.exports = ({ contentPath = 'blog', basePath = '/' }) => ({
  plugins: [
    `@statikly/gatsby-theme-ui`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              // showCaptions: true,
              // markdownCaptions: true,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              // showCaptions: true,
              // markdownCaptions: true,
            },
          },
        ],
      },
    },
  ],
})
