import React from 'react'

import { ShopProvider } from './src/components/ShopProvider'

export const wrapRootElement = ({ element }) => (
  <ShopProvider>{element}</ShopProvider>
)
