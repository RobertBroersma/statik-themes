import React from 'react'
import { Portfolio4 as Component } from './component'

export const Portfolio4 = props => <Component {...props} />

export default Portfolio4

export const widget = {
  label: 'Portfolio #4',
  name: 'Portfolio4',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
  ],
}
