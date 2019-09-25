import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { space } from 'styled-system'
import { css } from '@styled-system/css'

const StyledLink = styled(GatsbyLink)(
  css({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  space,
)

export const Link = ({ to, ...rest }) =>
  !to.match(/https?:\/\//i) ? (
    <StyledLink to={`/${to}`.replace(/\/\/+/g, '/')} {...rest} />
  ) : (
    <StyledLink as="a" href={to} {...rest} />
  )
