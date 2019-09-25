module.exports = {
  plugins: [
    {
      resolve: '@statikly/gatsby-theme-builder',
      options: {
        pagesPath: `${__dirname}/_pages`,
        configPath: `${__dirname}/_config`,
        staticPath: `${__dirname}/static/images/uploads`,
      },
    },
    '@statikly/gatsby-theme-ui',
  ],
}
