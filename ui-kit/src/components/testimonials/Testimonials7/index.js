import React, { useState, useRef } from 'react'
import { useTransition, animated, useSpring, interpolate } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Box, Container } from '../../Box'
import { H3, Text } from '../../Typography'

const Avatar = styled.img(
  css({
    borderRadius: '50%',
    width: [100, 120, 180],
    height: [100, 120, 180],
    objectFit: 'cover',
  }),
)

const stateMap = {
  previousHidden: {
    transform: [
      'translateX(-70px) scale(0.8)',
      'translateX(-90px) scale(0.8)',
      'translateX(-120px) scale(0.8)',
    ],
    opacity: 0,
  },
  previous: {
    transform: [
      'translateX(-70px) scale(0.8)',
      'translateX(-90px) scale(0.8)',
      'translateX(-120px) scale(0.8)',
    ],
    opacity: 0.5,
    zIndex: 1,
  },
  current: {
    transform: 'translateX(0) scale(1)',
    opacity: 1,
    zIndex: 100,
  },
  next: {
    transform: [
      'translateX(70px) scale(0.8)',
      'translateX(90px) scale(0.8)',
      'translateX(120px) scale(0.8)',
    ],
    opacity: 0.5,
    zIndex: 1,
  },
  nextHidden: {
    transform: [
      'translateX(70px) scale(0.8)',
      'translateX(90px) scale(0.8)',
      'translateX(120px) scale(0.8)',
    ],
    opacity: 0,
  },
  hidden: {
    transform: 'translateX(0) scale(0.8)',
    opacity: 0,
  },
}

const AvatarContainer = ({ person, state = 'hidden' }) => {
  return (
    <div
      css={css({
        ...stateMap[state],
        transition: '.2s ease all',
      })}
    >
      <Avatar src={person.avatar} alt={person.name} />
    </div>
  )
}

const Relative = styled.div(
  css({
    position: 'relative',
  }),
)

const Absolute = styled.div(
  css({
    position: 'absolute',
    top: 0,
  }),
)

const mod = (x, n) => ((x % n) + n) % n

const getState = (current, total, index) => {
  if (current === index) {
    return 'current'
  }

  if (mod(current - 1, total) === index) {
    return 'previous'
  }

  if (mod(current + 1, total) === index) {
    return 'next'
  }

  if (mod(current - 2, total) === index) {
    return 'previousHidden'
  }

  if (mod(current + 2, total) === index) {
    return 'nextHidden'
  }
}

const getZIndex = (current, total, index) => {
  if (current === index) {
    return 10
  }

  if (mod(current - 1, total) === index) {
    return 1
  }

  if (mod(current + 1, total) === index) {
    return 1
  }
}

const Content = ({ slide, ...rest }) => (
  <Box {...rest}>
    <Text fontSize={[2, 3, 3]} fontWeight="medium" color="gray.600">
      {slide.body}
    </Text>
    <Text fontSize={[2, 3, 3]} fontWeight="medium" color="gray.900" mt={2}>
      {slide.name}
    </Text>
    <Text fontSize={2} fontWeight="normal" color="gray.600" mt={1}>
      {slide.personTitle}
    </Text>
  </Box>
)

const CarouselCircle = styled.button(({ active }) =>
  css({
    width: 8,
    height: 8,
    padding: 0,
    borderRadius: '50%',
    outline: 0,
    border: 0,
    cursor: 'pointer',
    backgroundColor: active ? 'gray.800' : 'gray.400',
    transition: '.2s ease all',
    '&:focus': {
      backgroundColor: 'secondary.200',
    },
  }),
)

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = {
  x: 0,
  y: -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: 100,
}
const from = { x: 0, rot: 0, scale: 1.5, y: -1000 }

// TODO: Make use of gatsby image
// TODO: Implement arrows
export const Testimonials7 = ({ title, slides }) => {
  const [index, setIndex] = useState(0)
  // const [{ x, dir }, set] = useState(0)

  const [{ x, dir }, set] = useSpring(() => ({ x: 0, dir: 0 }))
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 || Math.abs(mx) > 500
      const dir = xDir < 0 ? -1 : 1

      let x = down ? mx * 0.2 : 0

      if (!down && trigger) {
        const next = index - dir
        if (next > slides.length - 1) {
          setIndex(0)
        } else if (next < 0) {
          setIndex(slides.length - 1)
        } else {
          setIndex(next)
        }

        // x = (200 + window.innerWidth) * dir
      }

      set({ x, dir, delay: undefined, config: { friction: 50, tension: 500 } })
    },
  )

  const contentTransitions = useTransition(slides[index], item => item.name, {
    from: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 100 },
    update: { x },
  })

  return (
    <Box px={2}>
      <Container py={[8, 8, 15]}>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          css={css({ cursor: 'grab', '&:active': { cursor: 'grabbing' } })}
          {...bind()}
        >
          <Box maxWidth={600}>
            <H3>{title}</H3>
          </Box>
          <Box
            mt={6}
            height={[100, 120, 180]}
            width={1}
            justifyContent="center"
          >
            <Relative css={css({ display: 'flex', justifyContent: 'center' })}>
              {slides.map((item, i) => (
                <Absolute
                  key={item.name}
                  css={{ zIndex: getZIndex(index, slides, i) }}
                >
                  <AvatarContainer
                    person={item}
                    state={getState(index, slides.length, i)}
                  />
                </Absolute>
              ))}
            </Relative>
          </Box>
          <Box mt={8} width={1} maxWidth={800}>
            <Relative>
              <Content css={css({ opacity: 0 })} slide={slides[index]} />
              {contentTransitions.map(({ props, item, key }) => (
                <Absolute key={key}>
                  <animated.div
                    style={{
                      opacity: props.opacity,
                      x: interpolate(
                        [props.x, x, dir],
                        (x1, x2, dir) => x1 + x2 * dir,
                      ),
                    }}
                    key={key}
                  >
                    <Content slide={item} />
                  </animated.div>
                </Absolute>
              ))}
            </Relative>
          </Box>
          <Box mt={8}>
            {slides.map((slide, i) => (
              <CarouselCircle
                key={slide.name}
                active={i === index}
                css={css({ margin: '4px' })}
                onClick={() => setIndex(i)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
