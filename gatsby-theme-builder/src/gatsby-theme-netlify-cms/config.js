import { createConfig, registerPreviewTemplate } from 'gatsby-theme-netlify-cms'
import PagePreview from './preview-templates/page-preview'

import { components } from '../components'

const pageComponents = Object.values(components).map(block => block.widget)

const pageCollection = {
  label: 'Pages',
  label_singular: 'Page',
  name: 'pages',
  folder: '_pages',
  create: true,
  identifier_field: 'title',
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
}

const portfolioCollection = {
  label: 'Portfolio',
  label_singular: 'Project',
  name: 'portfolio',
  folder: '_portfolio',
  create: true,
  identifier_field: 'title',
  fields: [
    {
      label: 'Template Key',
      name: 'templateKey',
      widget: 'hidden',
      default: 'portfolio',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Featured Image',
      name: 'featuredImage',
      widget: 'image',
    },
    {
      label: 'description',
      name: 'description',
      widget: 'text',
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
      // TODO: add default portfolio page template
    },
  ],
}

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
    pageCollection,
    portfolioCollection,
  ],
})

registerPreviewTemplate('pages', PagePreview)

export default config
