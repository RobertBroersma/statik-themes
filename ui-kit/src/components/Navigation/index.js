import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Link } from 'gatsby'

const Logo = styled(Link).attrs({
  to: '/',
})`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  &::selection {
    background-color: transparent;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space[5]}px;
`

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

const MenuItem = styled.li`
  margin-right: ${({ theme }) => theme.space[4]}px;
`

const MenuLink = styled(Link).attrs({
  activeClassName: 'active',
})`
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[1]}px;
  text-decoration: none;
  border-bottom: 0;
  position: relative;

  &:after {
    content: '';
    height: 3px;
    display: flex;
    justify-content: center;
    width: 0;
    position: absolute;
    margin-left: 50%;
    bottom: 0;
    display: block;
    transition: 0.2s ease all;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &:hover:after,
  &.active:after {
    width: 100%;
    margin-left: 0%;
  }
`

export const Header = props => (
  <Box as="header" display="flex" p={4}>
    <Logo>Statik</Logo>
    <Nav>
      <Menu>
        <MenuItem>
          <MenuLink to="/blog">Blog</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/contact">Contact</MenuLink>
        </MenuItem>
      </Menu>
    </Nav>
  </Box>
)
