module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['200', '400', '500', '600', '700', '800'],
            subsets: ['latin', 'latin-ext'],
          },
          {
            family: 'Open Sans',
            variants: ['400', '700'],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
