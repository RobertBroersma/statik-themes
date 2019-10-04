import React from 'react'
import css from '@styled-system/css'

import { Box, Container } from '@statikly/ui-kit/src/components/Box'
import { Image } from '@statikly/ui-kit/src/components/Image'
import { Text, H2 } from '@statikly/ui-kit/src/components/Typography'

export const Header30 = ({ title, body, icon }) => (
  <Box px={2}>
    <Container
      display="flex"
      py={[8, 8, 15]}
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
    >
      <Box
        width={[1, 1, 1 / 2]}
        css={css({ textAlign: ['center', 'center', 'left'] })}
      >
        <H2>{title}</H2>
        <Text mt={2}>{body}</Text>
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
