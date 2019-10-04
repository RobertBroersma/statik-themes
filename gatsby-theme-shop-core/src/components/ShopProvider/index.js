import React from 'react'

import { ShopContext } from '../../ShopContext'

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = React.useState(() =>
    JSON.parse(localStorage.getItem('cart') || '{}'),
  )
  const addToCart = product =>
    setCart({
      ...cart,
      [product.sku]: cart[product.sku]
        ? { product, quantity: cart[product.sku].quantity + 1 }
        : { product, quantity: 1 },
    })
  const removeFromCart = product =>
    setCart(cart.filter(item => item.id !== product.id))

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <ShopContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  )
}
