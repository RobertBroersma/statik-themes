import { Feature5 } from './component'

export { Feature5 }

export default Feature5

export const widget = {
  label: 'Feature #5',
  name: 'Feature5',
  widget: 'object',
  fields: [
    {
      label: 'Features',
      name: 'features',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Body', name: 'body', widget: 'text' },
      ],
    },
  ],
}
