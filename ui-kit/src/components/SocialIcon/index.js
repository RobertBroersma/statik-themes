import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Facebook from '../../icons/Facebook'
import Twitter from '../../icons/Twitter'

const iconMap = {
  Facebook,
  Twitter,
}

const Wrapper = styled.span(({ iconColor, backgroundColor }) =>
  css({
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 0,
    color: iconColor,
    backgroundColor,
    '&:hover': {
      color: `${iconColor.split('.')[0]}.${parseInt(iconColor.split('.')[1]) +
        200}`,
    },
  }),
)

export const SocialIcon = ({
  name,
  iconColor = 'gray.500',
  backgroundColor = 'white.darker',
}) => {
  const Icon = iconMap[name]

  return (
    <Wrapper iconColor={iconColor} backgroundColor={backgroundColor}>
      {Icon ? <Icon /> : name}
    </Wrapper>
  )
}
