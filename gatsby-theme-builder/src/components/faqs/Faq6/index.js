import { Faq6 } from './component'

export { Faq6 }

export default Faq6

// TODO: widget
export const widget = {
  label: 'FAQ #6',
  name: 'Faq6',
  widget: 'object',
  fields: [
    {
      label: 'Location',
      name: 'location',
      widget: 'object',
      fields: [
        {
          label: 'Latitude',
          name: 'lat',
          widget: 'number',
          valueType: 'float',
          step: 0.000001,
        },
        {
          label: 'Longitude',
          name: 'lng',
          widget: 'number',
          valueType: 'float',
          step: 0.000001,
        },
      ],
    },
    {
      label: 'Address',
      name: 'address',
      widget: 'text',
    },
    {
      label: 'Phone Numbers',
      name: 'phoneNumbers',
      widget: 'list',
      field: { label: 'Number', name: 'number', widget: 'string' },
    },
  ],
}
