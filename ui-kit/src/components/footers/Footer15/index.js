import React from 'react'
import css from '@styled-system/css'
import { Box, Container } from '../../Box'
import { TextField } from '../../TextField'
import { Text } from '../../Typography'
import { Link } from '../../Link'
import { MenuItem, Menu } from '../../Menu'

/**
 * TODO: Make Columns configurable with widgets (like column2)
 * TODO: Make t&c configurable
 * TODO: Make privacy policy configurable
 * TODO: Make variable amount of columns?
 * TODO: Style TextField
 */

export const Footer15 = ({ links, column2, logo, icons }) => (
  <Box bg="primary.900" py={[4, 4, 7]} px={2} color="white.base">
    <Container>
      <Box display="flex" py={[4, 4, 8]} flexWrap="wrap">
        <Box
          display="flex"
          flex="1 0 67%"
          flexBasis={['100%', '100%', '67%']}
          flexWrap="wrap"
          mb={[6, 6, 0]}
        >
          <Box
            flex="1 0 33%"
            flexBasis={['100%', '100%', '33%']}
            mb={[3, 3, 0]}
            justifyContent={['center', 'center', 'flex-start']}
          >
            {logo}
          </Box>
          <Box flex="1 0 33%">{column2}</Box>
          <Box flex="1 0 33%">
            <Text fontSize={3} css={{ textTransform: 'uppercase' }}>
              Quick Links
            </Text>
            <Menu
              css={css({
                marginTop: 2,
                color: 'white.dark',
              })}
            >
              {links.map(link => (
                <MenuItem
                  css={css({ marginTop: 1 })}
                  key={link.page || link.href}
                >
                  <Link to={link.page || link.href}>{link.title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box flex="1 0 33%" flexBasis={['100%', '100%', '33%']}>
          <TextField label="Your Email Address" />
        </Box>
      </Box>
      <Box
        pt={[4, 4, 7]}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        css={css({ borderTop: '1px solid', borderColor: 'white.dark' })}
      >
        <Text color="white.dark">&copy; All rights reserved</Text>
        {icons}
      </Box>
    </Container>
  </Box>
)
