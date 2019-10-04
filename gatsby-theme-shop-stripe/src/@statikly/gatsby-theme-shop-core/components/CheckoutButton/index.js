import React from 'react'

export const CheckoutButton = ({ cart }) => {
  const stripe = React.useRef(window.Stripe('pk_test_UNc75BlZOeUdvpxoXk4x8SBL'))

  const redirectToCheckout = async e => {
    e.preventDefault()

    try {
      const { error } = await stripe.current.redirectToCheckout({
        items: Object.entries(cart).map(([sku, { quantity }]) => ({
          sku,
          quantity,
        })),
        successUrl: 'http://localhost:8000/shop/thanks',
        cancelUrl: 'http://localhost:8000/',
      })

      if (error) {
        console.error(e)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return <button onClick={redirectToCheckout}>Purchase</button>
}
