import { widget as TextWidget } from '../../widgets/TextWidget'

import { Footer15 } from './component'

export { Footer15 }

export default Footer15

export const widget = {
  label: 'Footer #15',
  name: 'Footer15',
  widget: 'object',
  fields: [
    {
      label: 'Quick Links',
      label_singular: 'Quick Link',
      name: 'links',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        {
          label: 'Page',
          name: 'page',
          widget: 'relation',
          collection: 'pages',
          searchFields: ['title', 'slug'],
          displayFields: ['title'],
          valueField: 'slug',
          required: false,
        },
        {
          label: 'Url',
          name: 'href',
          widget: 'string',
          required: false,
        },
      ],
    },
    {
      label: 'Column #2',
      name: 'column2',
      widget: 'list',
      types: [TextWidget],
    },
  ],
}
