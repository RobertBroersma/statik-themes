import { Contact13 } from './component'

export { Contact13 }

export default Contact13

export const widget = {
  label: 'Contact #13',
  name: 'Contact13',
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
