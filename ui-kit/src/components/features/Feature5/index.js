import React from 'react'
import { Box, Container } from '../../Box'
import { Text } from '../../Typography'

export const Feature5 = ({ features }) => {
  return (
    <Box px={2}>
      <Container py={10}>
        <Box
          display="flex"
          flexDirection={['column', 'row']}
          flexWrap={['wrap', 'wrap', 'nowrap']}
          mx={-2}
        >
          {features.map((feature, index) => (
            <Box
              key={feature.title}
              p={2}
              flex={['1 0 100%', '1 0 50%', '1 0 33.333%']}
            >
              <Text fontSize={7} fontWeight="800">
                0{index + 1}{' '}
                <Text as="span" color="red" ml={-1}>
                  .
                </Text>
              </Text>
              <Text fontSize={2} fontWeight="medium" mt={0}>
                {feature.title}
              </Text>
              <Text color="gray.500" mt={3}>
                {feature.body}
              </Text>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
