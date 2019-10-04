import React from 'react'
import Helmet from 'react-helmet'

const getSchemaOrgJSONLD = ({ productData, shopSettings }) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: productData.title,
  description: productData.description,
  image: productData.images.map(img => img.publicURL),
  sku: productData.id,
  // brand: {
  //   '@type': 'Thing',
  //   name: 'ACME',
  // },
  // review: {
  //   '@type': 'Review',
  //   reviewRating: {
  //     '@type': 'Rating',
  //     ratingValue: '4',
  //     bestRating: '5',
  //   },
  //   author: {
  //     '@type': 'Person',
  //     name: 'Fred Benson',
  //   },
  // },
  // aggregateRating: {
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.4',
  //   reviewCount: '89',
  // },
  offers: {
    '@type': 'Offer',
    // url: 'https://example.com/anvil',
    priceCurrency: shopSettings.currency,
    price: productData.price,
    priceValidUntil: '2021-01-01',
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: shopSettings.name,
    },
  },
})

export const SEO = ({ productData, shopSettings }) => {
  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    productData,
    shopSettings,
  })

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={productData.description} />
      {/* <meta name="image" content={image} /> */}

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      {/* <meta property="og:url" content={url} /> */}
      <meta property="og:product" content="article" />
      <meta property="og:title" content={productData.title} />
      <meta property="og:description" content={productData.description} />
      {/* <meta property="og:image" content={image} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:creator" content={config.twitter} /> */}
      <meta name="twitter:title" content={productData.title} />
      <meta name="twitter:description" content={productData.description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Helmet>
  )
}
