import React from 'react'

import { Header22 as Header } from '@statikly/ui-kit/src/components/headers/Header22'
import { SocialIcons } from '@statikly/gatsby-theme-builder/src/components/widgets/SocialIcons'

export const Header22 = props => (
  <Header
    icons={<SocialIcons iconColor="black" backgroundColor="none" />}
    {...props}
  />
)
