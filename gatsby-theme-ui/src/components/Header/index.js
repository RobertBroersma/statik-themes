import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'

const HeaderWrapper = styled(Box).attrs({ as: 'header', p: 4, bg: 'gray.1' })`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[3]};
`

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Header = props => (
  <HeaderWrapper>
    <Logo>Statik</Logo>
  </HeaderWrapper>
)
