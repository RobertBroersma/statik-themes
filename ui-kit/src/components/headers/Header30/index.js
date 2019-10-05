import React from 'react'
import css from '@styled-system/css'

import { Box, Container } from '../../Box'
import { Image } from '../../Image'
import { Text, H2 } from '../../Typography'

export const Header30 = ({ title, body, icon }) => (
  <Box px={2}>
    <Container
      display="flex"
      py={[4, 8, 15]}
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
    >
      <Box
        width={[1, 1, 1 / 2]}
        css={css({ textAlign: ['center', 'center', 'left'] })}
        display="flex"
        justifyContent={['center', 'center', 'flex-start']}
      >
        <Box maxWidth={[600, 600, 'none']}>
          <H2>{title}</H2>
          <Text mt={2}>{body}</Text>
        </Box>
      </Box>
      <Box
        width={[1, 1, 1 / 2]}
        mt={[6, 6, 0]}
        css={css({ textAlign: 'center' })}
      >
        <Image src={icon} />
      </Box>
    </Container>
  </Box>
)
