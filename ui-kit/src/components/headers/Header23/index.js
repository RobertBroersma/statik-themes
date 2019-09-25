import React, { useState } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import css from '@styled-system/css'
import Img from 'gatsby-image'

import { Box } from '../../Box'
import { Text, H2 } from '../../Typography'

import Smartphone from '../../../icons/Smartphone'
import Bag1 from '../../../icons/Bag1'
import AcceptCr from '../../../icons/AcceptCr'
import { CarouselNext, CarouselPrevious } from '../../Carousel'

const iconMap = {
  Smartphone,
  Bag1,
  AcceptCr,
}

/**
 * Header #23
 *
 * TODO:
 * - Make minHeight a prop
 * - Implement all icons
 * - Move icon map to own file
 */

const Relative = styled.div(
  css({
    position: 'relative',
    width: '100%',
    height: '100%',
  }),
)
const Absolute = styled.div(
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

export const CarouselNavigation = styled.div(
  css({
    position: 'absolute',
    bottom: 8,
    right: 15,
  }),
)

export const Header23 = ({ slides }) => {
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

  return (
    <Box
      pl={[0, 0, 2]}
      display="flex"
      flexWrap="wrap"
      flexDirection={['column', 'column', 'row']}
    >
      <Box
        flex="0 0 50%"
        maxWidth={600}
        ml={[0, 0, 'auto']}
        display="flex"
        flexDirection={['column', 'column', 'row']}
        minHeight={720}
        order={[1, 1, 0]}
      >
        <Box flex="1 1 70%" py={[8, 8, 15]} pr={8} pl={[2, 2, 0]}>
          <Relative>
            {textTransitions.map(({ item, props, key }) => {
              const Icon = iconMap[item.icon]
              return (
                <Animated key={key} style={props}>
                  {item.category && (
                    <Text fontSize={1}>
                      <Box
                        as="span"
                        display="inline-block"
                        verticalAlign="middle"
                        mr={1}
                      >
                        {item.icon && <Icon width="1.5em" height="1.5em" />}
                      </Box>{' '}
                      {item.category}
                    </Text>
                  )}
                  <H2 fontSize={[5, 5, 7]} lineHeight={2} mt={[2, 2, 4]}>
                    {item.title}
                  </H2>
                  <Text fontSize={4} lineHeight={2} mt={3}>
                    {item.body}
                  </Text>
                </Animated>
              )
            })}
          </Relative>
        </Box>
      </Box>

      <Box
        flex="0 0 50%"
        order={[0, 0, 1]}
        height={[400, 400, 'auto']}
        maxHeight={[400, 400, 800]}
      >
        <Relative>
          {imageTransitions.map(({ item, props, key }) => (
            <Animated key={key} style={props}>
              {item.image.childImageSharp ? (
                <Img
                  fluid={item.image.childImageSharp.fluid}
                  alt={item.title}
                />
              ) : (
                <img
                  css={css({
                    width: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                  })}
                  src={item.image}
                  alt={item.title}
                />
              )}
            </Animated>
          ))}
          <CarouselNavigation>
            <CarouselPrevious
              css={css({ marginRight: 2 })}
              onClick={() => set(index >= slides.length - 1 ? 0 : index + 1)}
            />
            <CarouselNext
              onClick={() => set(index >= slides.length - 1 ? 0 : index + 1)}
            />
          </CarouselNavigation>
        </Relative>
      </Box>
    </Box>
  )
}
