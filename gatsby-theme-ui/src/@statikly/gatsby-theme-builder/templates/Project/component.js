import React from 'react'
import { ProjectTemplate as Component } from '@statikly/gatsby-theme-builder/src/templates/Project/component'
import { Layout } from '@statikly/ui-kit/src/components/Layout'

export const ProjectTemplate = ({ pageComponents }) => {
  return (
    <Layout>
      <Component pageComponents={pageComponents} />
    </Layout>
  )
}
