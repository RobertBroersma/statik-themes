import React from 'react'
import { Header23 as Component } from './component'

export const Header23 = props => <Component {...props} />

export default Header23

export const widget = {
  label: 'Header #23',
  name: 'Header23',
  widget: 'object',
  fields: [
    {
      label: 'Slides',
      label_singular: 'Slide',
      name: 'slides',
      widget: 'list',
      fields: [
        {
          label: 'Icon',
          name: 'icon',
          widget: 'select',
          options: ['AcceptCr', 'Smartphone', 'Bag1'],
        },
        { label: 'Category', name: 'category', widget: 'string' },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Body', name: 'body', widget: 'text' },
        { label: 'Image', name: 'image', widget: 'image' },
      ],
    },
  ],
}
