import { Navbar6 } from './component'

export { Navbar6 }

export default Navbar6

export const widget = {
  label: 'Navbar #6',
  name: 'Navbar6',
  widget: 'object',
  fields: [
    {
      label: 'Menu Items',
      name: 'menuItems',
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
        },
      ],
    },
  ],
}
