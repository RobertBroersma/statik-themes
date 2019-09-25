import React from 'react'
import { Header22 as Component } from './component'

export const Header22 = props => <Component {...props} />

export default Header22

export const widget = {
  label: 'Header #22',
  name: 'Header22',
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
