module.exports = {
  plugins: [
    '@statikly/gatsby-theme-ui-child',
    {
      resolve: '@statikly/gatsby-theme-blog',
      options: {
        basePath: '/blog',
      },
    },
  ],
}
