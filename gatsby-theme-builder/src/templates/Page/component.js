import React from 'react'
import { components } from '../../components'

export const PageTemplate = ({ pageComponents }) => {
  if (!pageComponents) return 'No components configured'

  return pageComponents.map((c, index) => {
    const C = components[c.type].default
    return <C key={index} {...c} />
  })
}
