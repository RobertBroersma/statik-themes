import React from 'react'
import { PageTemplate as Component } from '@statikly/gatsby-theme-builder/src/templates/Page/component'
import { Layout } from '@statikly/ui-kit/src/components/Layout'

export const PageTemplate = ({ pageComponents }) => {
  return (
    <Layout>
      <Component pageComponents={pageComponents} />
    </Layout>
  )
}
