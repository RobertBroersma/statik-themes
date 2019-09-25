import { createConfig, registerPreviewTemplate } from 'gatsby-theme-netlify-cms'
import PagePreview from './preview-templates/page-preview'

import { components } from '../components'

const pageComponents = Object.values(components).map(block => block.widget)

const config = createConfig({
  media_folder_relative: true,
  media_folder: 'static/images/uploads',
  public_folder: '/images/uploads',
  collections: [
    {
      label: 'Configuration',
      name: 'config',
      files: [
        {
          label: 'Configuration',
          name: 'config',
          file: '_config/config.yml',
          fields: [
            {
              label: 'Business Address',
              name: 'businessAddress',
              widget: 'text',
            },
            {
              label: 'Social Media',
              name: 'socialMedia',
              required: false,
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                },
              ],
            },
          ],
        },
        {
          label: 'Website Head',
          name: 'globalHead',
          file: '_config/head.yml',
          fields: [
            {
              label: 'Content',
              name: 'content',
              widget: 'list',
              types: pageComponents,
            },
          ],
        },
        {
          label: 'Theme',
          name: 'theme',
          file: '_config/theme.yml',
          fields: [
            {
              label: 'Logo',
              name: 'logo',
              widget: 'image',
              required: false,
            },
          ],
        },
      ],
    },
    {
      label: 'Pages',
      label_singular: 'Page',
      name: 'pages',
      folder: '_pages',
      create: true,
      identifier_field: 'name',
      fields: [
        {
          label: 'Template Key',
          name: 'templateKey',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Content',
          name: 'content',
          widget: 'list',
          types: pageComponents,
        },
      ],
    },
  ],
})

registerPreviewTemplate('pages', PagePreview)

export default config
