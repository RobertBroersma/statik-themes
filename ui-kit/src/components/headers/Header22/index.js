import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { layout } from 'styled-system'
import css from '@styled-system/css'
import Img from 'gatsby-image'
import { useTransition, animated } from 'react-spring'
import ArrowSimple1 from '../../../icons/ArrowSimple1'
import { Box, Container } from '../../Box'
import { Text, H3 } from '../../Typography'
import { CarouselNext, CarouselPrevious } from '../../Carousel'

/**
 * TODO: Abstract Relative and Absolute components
 * TODO: Create reusable social icon component
 */

const Relative = styled(Box)(
  css({
    position: 'relative',
    width: '100%',
    height: '100%',
  }),
  layout,
)

const Absolute = styled(Box)(
  css({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    willChange: 'opacity',
  }),
)
const Animated = animated(Absolute)

const StepButton = styled.button(({ active }) =>
  css({
    backgroundColor: active ? 'primary.500' : 'transparent',
    color: active ? 'white.base' : 'bodytext',
    border: 0,
    width: 48,
    height: 48,
    borderRadius: 2,
    fontSize: 2,
    outline: 0,
    cursor: 'pointer',
    boxShadow: active ? 'normal' : 'none',
  }),
)

const Card = styled.button(
  css({
    boxShadow: 'normal',
    backgroundColor: 'white.base',
    borderRadius: 2,
    overflow: 'hidden',
    border: 0,
    padding: 0,
    cursor: 'pointer',
  }),
  layout,
)

export const Header22 = ({ slides, icons }) => {
  const [index, set] = useState(0)
  const imageTransitions = useTransition(slides[index], item => item.title, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  const textTransitions = useTransition(slides[index], item => item.title, {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(40px)' },
  })
  const cardTransitions = useTransition(slides[index], item => item.title, {
    from: { opacity: 0, transform: 'translateX(100px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateX(-100px)' },
  })

  return (
    <Box height="calc(100vh - 120px)">
      <Relative>
        {imageTransitions.map(({ item, props, key }) => (
          <Animated key={key} style={props}>
            <Img fluid={item.image.childImageSharp.fluid} alt={item.title} />
          </Animated>
        ))}
        <Absolute>
          <Box px={2} height="100%">
            <Container height="100%">
              <Relative>
                <Box
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box
                    minHeight={340}
                    display="flex"
                    width={1}
                    justifyContent="space-between"
                  >
                    <Box width={1} maxWidth={500}>
                      <Box display="flex">
                        <CarouselPrevious
                          variant=""
                          css={css({ marginRight: 2 })}
                          onClick={() =>
                            set(index >= slides.length - 1 ? 0 : index + 1)
                          }
                        />
                        <CarouselNext
                          onClick={() =>
                            set(index >= slides.length - 1 ? 0 : index + 1)
                          }
                        />
                      </Box>
                      <Relative mt={2}>
                        {textTransitions.map(({ item, props, key }) => (
                          <Animated key={key} style={props}>
                            <H3>{item.title}</H3>
                            <Text fontSize={3} lineHeight={2} mt={3}>
                              {item.body}
                            </Text>
                          </Animated>
                        ))}
                      </Relative>
                    </Box>
                    <Relative
                      width={180}
                      css={css({ display: ['none', 'block', 'block'] })}
                    >
                      {cardTransitions.map(({ item, props, key }) => {
                        const nextItem =
                          index >= slides.length - 1
                            ? slides[0]
                            : slides[index + 1]

                        return (
                          <Animated key={key} style={props}>
                            <Card
                              width={180}
                              onClick={() =>
                                set(index >= slides.length - 1 ? 0 : index + 1)
                              }
                            >
                              <Box height={250}>
                                <Img
                                  fluid={nextItem.image.childImageSharp.fluid}
                                  alt={nextItem.title}
                                />
                              </Box>
                              <Box
                                p={2}
                                pb={3}
                                display="flex"
                                justifyContent="space-between"
                              >
                                <Text fontSize={1} mr={1}>
                                  {nextItem.title}
                                </Text>
                                <ArrowSimple1 css="transform: scaleX(-1)" />
                              </Box>
                            </Card>
                          </Animated>
                        )
                      })}
                    </Relative>
                  </Box>
                  <Box
                    display="flex"
                    width={1}
                    justifyContent="space-between"
                    alignItems="center"
                    css={css({ position: 'absolute', bottom: [4, 4, 12] })}
                  >
                    <Box>
                      {slides.map((slide, i) => (
                        <StepButton
                          key={slide.title}
                          onClick={() => set(i)}
                          active={i === index}
                        >
                          {`${i + 1}`.padStart(2, '0')}
                        </StepButton>
                      ))}
                    </Box>
                    <Box>{icons}</Box>
                  </Box>
                </Box>
              </Relative>
            </Container>
          </Box>
        </Absolute>
      </Relative>
    </Box>
  )
}
