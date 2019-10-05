import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Box, Container } from '../../Box'

const Menu = styled.ul(
  css({
    display: 'flex',
    listStyle: 'none',
  }),
)

const MenuItem = styled.li(css({}))

const MenuLink = styled(Link)(
  css({
    color: 'gray.800',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
)

export const Navbar6 = ({ menuItems, logo }) => (
  <Box px={2}>
    <Container>
      <Box
        height={[80, 80, 120]}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {logo}
        <Menu>
          {menuItems.map(item => (
            <MenuItem key={item}>
              <MenuLink to={`/${item.page}`}>{item.title}</MenuLink>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Container>
  </Box>
)
