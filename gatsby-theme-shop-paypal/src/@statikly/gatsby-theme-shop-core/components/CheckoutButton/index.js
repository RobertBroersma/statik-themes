import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { graphql, useStaticQuery } from 'gatsby'

const GET_CLIENT_ID = graphql`
  {
    sitePlugin(name: { eq: "@statikly/gatsby-theme-shop-paypal" }) {
      pluginOptions {
        clientId
      }
    }
  }
`

export const CheckoutButton = ({ cart, shopSettings }) => {
  const data = useStaticQuery(GET_CLIENT_ID)
  const options = { clientId: data.sitePlugin.pluginOptions.clientId }
  console.log('optiones', options)

  return (
    <PayPalButton
      amount={Object.values(cart).reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      )}
      currency={shopSettings.currency}
      onSuccess={(details, data) => {
        alert('Transaction completed by ' + details.payer.name.given_name)
      }}
      options={options}
    />
  )
}
