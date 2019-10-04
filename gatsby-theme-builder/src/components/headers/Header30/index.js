import React from 'react'
import { Header30 as Component } from './component'

export const Header30 = props => <Component {...props} />

export default Header30

export const widget = {
  label: 'Header #30',
  name: 'Header30',
  widget: 'object',
  fields: [
    {
      label: 'Slides',
      label_singular: 'Slide',
      name: 'slides',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Body', name: 'body', widget: 'text' },
        { label: 'Image', name: 'image', widget: 'image' },
      ],
    },
  ],
}
