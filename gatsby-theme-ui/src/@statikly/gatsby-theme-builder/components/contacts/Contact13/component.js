import React from 'react'
import { Contact13 as Contact } from '@statikly/ui-kit/src/components/contacts/Contact13'
import { SocialIcons } from '@statikly/gatsby-theme-builder/src/components/widgets/SocialIcons'

export const Contact13 = props => (
  <Contact {...props} icons={<SocialIcons iconColor="gray.400" />} />
)
