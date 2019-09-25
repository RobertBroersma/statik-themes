import { TextWidget } from './component'

export default TextWidget

export const widget = {
  label: 'Plain text',
  name: 'TextWidget',
  widget: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    },
    {
      label: 'Body',
      name: 'body',
      widget: 'text',
    },
  ],
}
