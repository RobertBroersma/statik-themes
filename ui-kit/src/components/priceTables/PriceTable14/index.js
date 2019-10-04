import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { Box, Container } from '../../Box'
import { Text } from '../../Typography'
import { Button } from '../../Button'

const modeMap = {
  light: css({
    backgroundColor: 'white.0',
    borderColor: 'gray.100',
    boxShadow: 'normal',
    color: 'bodytext',
  }),
  dark: css({
    backgroundColor: 'primary.700',
    color: 'white.base',
    borderColor: 'transparent',
  }),
}

const Card = styled.div(
  css({
    padding: 6,
    border: '1px solid',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  }),
  ({ mode }) => modeMap[mode],
)

const Shadow = styled.div(({ shadow }) =>
  css({
    boxShadow: shadow,
    display: 'flex',
    flex: '1 1 auto',
  }),
)

export const PriceTable14 = ({ items }) => (
  <Box px={2}>
    <Container py={15}>
      <Box mx={-2} display="flex" flexWrap="wrap" justifyContent="center">
        {items.map(item => (
          <Box
            pt={2}
            px={1}
            display="flex"
            flex="1 0 420px"
            flexBasis={['100%', '50%', '33.333%']}
            maxWidth={420}
            minWidth={320}
          >
            <Shadow shadow="medium">
              <Shadow shadow="large">
                <Shadow shadow="xlarge">
                  <Card key={item.title} mode={item.mode}>
                    <Box
                      display="flex"
                      flexWrap="wrap"
                      justifyContent="space-between"
                    >
                      <Text fontSize={5} fontWeight="bold">
                        {item.title}
                      </Text>
                      <Text fontSize={5} fontWeight="bold">
                        {item.price}
                      </Text>
                    </Box>
                    <Box>
                      {item.details.map(detail => (
                        <Text key={detail} mt={3}>
                          {detail}
                        </Text>
                      ))}
                    </Box>
                    <Box mt="auto">
                      <Button
                        mt={10}
                        variant={item.mode === 'dark' ? 'secondary' : 'primary'}
                        mode={item.mode === 'dark' ? 'light' : 'dark'}
                      >
                        {item.buttonText}
                      </Button>
                      <Text
                        mt={5}
                        color={item.mode === 'dark' ? 'white.600' : 'gray.600'}
                      >
                        {item.helperText}
                      </Text>
                    </Box>
                  </Card>
                </Shadow>
              </Shadow>
            </Shadow>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
)
