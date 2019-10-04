module.exports = {
  plugins: [
    {
      resolve: '@statikly/gatsby-theme-source-json',
      options: {
        productsFolder: `${__dirname}/_shop/products/`,
        shopPrefix: 'shop',
      },
    },
    {
      resolve: '@statikly/gatsby-theme-shop-core',
      options: { shopPrefix: '/shop' },
    },
    {
      resolve: '@statikly/gatsby-theme-shop-paypal',
      options: {
        clientId:
          'ARXZg3Ir34rfOwTnwMsntcjHy5tLrw6bKbgNoGk5AiogbQtvF9wxwrtHCD3swx1d1osrI5q4rUpxCc1U',
      },
    },
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
