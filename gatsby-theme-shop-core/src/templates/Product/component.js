import React from 'react'
import { Link } from 'gatsby'

export const ProductTemplate = ({ onAddToCart, ...props }) => (
  <>
    <pre>{JSON.stringify(props, null, 2)}</pre>
    <button onClick={onAddToCart}>Add to Cart</button>
    <Link to="/shop/cart">Cart</Link>
  </>
)
