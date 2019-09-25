import React from 'react'
import { PriceTable14 as Component } from './component'

export const PriceTable14 = props => <Component {...props} />

export default PriceTable14

export const widget = {
  label: 'Price Table #22',
  name: 'PriceTable14',
  widget: 'object',
  fields: [
    {
      label: 'Items',
      label_singular: 'Item',
      name: 'items',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Mode',
          name: 'mode',
          widget: 'select',
          options: ['light', 'dark'],
          default: 'light',
        },
        {
          label: 'Price',
          name: 'price',
          widget: 'string',
        },
        {
          label: 'Details',
          label_singular: 'Detail',
          name: 'details',
          widget: 'list',
          field: { label: 'Detail', name: 'detail', widget: 'string' },
        },
        {
          label: 'Button Text',
          name: 'buttonText',
          widget: 'string',
        },
        {
          label: 'Helper text',
          name: 'helperText',
          widget: 'text',
        },
      ],
    },
  ],
}
