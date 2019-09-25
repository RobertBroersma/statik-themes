import React from 'react'

import { Footer15 as Footer } from '@statikly/ui-kit/src/components/footers/Footer15'

import { Logo } from '@statikly/gatsby-theme-builder/src/components/widgets/Logo'
import { SocialIcons } from '@statikly/gatsby-theme-builder/src/components/widgets/SocialIcons'
import { widgets } from '@statikly/gatsby-theme-builder/src/components/widgets'

export const Footer15 = ({ column2, ...props }) => {
  const Column2 = widgets[column2[0].type].default

  return (
    <Footer
      icons={<SocialIcons variant="circle" mode="light" />}
      logo={<Logo />}
      column2={<Column2 {...column2[0]} />}
      {...props}
    />
  )
}
