import React from 'react'
import { ShopContext } from '../../ShopContext'
import { CheckoutButton } from '../../components/CheckoutButton'
import { graphql, useStaticQuery } from 'gatsby'

const GET_SHOP_SETTINGS = graphql`
  {
    shopSettings {
      name
      currency
    }
  }
`

export const Cart = () => {
  const shop = React.useContext(ShopContext)
  const { shopSettings } = useStaticQuery(GET_SHOP_SETTINGS)

  return (
    <>
      <pre>{JSON.stringify(shop, null, 2)}</pre>
      <CheckoutButton cart={shop.cart} shopSettings={shopSettings} />
    </>
  )
}

export default Cart
