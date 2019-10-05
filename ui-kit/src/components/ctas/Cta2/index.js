import React from 'react'
import { Box, Container } from '../../Box'
import { Text, H3 } from '../../Typography'

export const Cta2 = ({ title, body, widget }) => (
  <Box px={2}>
    <Container
      py={[8, 15]}
      display="flex"
      justifyContent="center"
      textAlign="center"
    >
      <Box maxWidth={800}>
        <H3 fontWeight="normal">{title}</H3>
        <Text mt={2} fontSize={3} fontWeight="medium" color="gray.600">
          {body}
        </Text>
        <Box mt={6} display="flex" justifyContent="center">
          <Box maxWidth={600} flex="1 1 auto">
            {widget}
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
)
