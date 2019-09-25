import React from 'react'
import css from '@styled-system/css'
import { SocialIcon } from '@statikly/ui-kit/src/components/SocialIcon'
import { Link } from '@statikly/ui-kit/src/components/Link'
import { Box } from '@statikly/ui-kit/src/components/Box'

export const SocialIcons = ({ icons, iconColor, backgroundColor }) => (
  <Box display="flex">
    {icons.map(icon => (
      <Link
        css={css({ '& + &': { marginLeft: 1 } })}
        key={icon.name}
        to={icon.link}
        target="__blank"
        noreferrer
      >
        <SocialIcon
          iconColor={iconColor}
          backgroundColor={backgroundColor}
          name={icon.name}
        />
      </Link>
    ))}
  </Box>
)
