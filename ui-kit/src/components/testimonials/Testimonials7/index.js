import React, { useState } from 'react'
import { useTransition, animated, useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import styled from 'styled-components'
import css from '@styled-system/css'

import { Box, Container } from '../../Box'
import { H3, Text } from '../../Typography'
import { CarouselPrevious, CarouselNext, CarouselCircle } from '../../Carousel'

const Avatar = styled.img.attrs({
  draggable: false,
})(
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

// TODO: Make use of gatsby image
// TODO: Implement arrows
export const Testimonials7 = ({ title, slides }) => {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)

  const [springProps, set] = useSpring(() => ({ x: 0, dir: 0 }))
  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 || Math.abs(mx) > 500
      const dir = xDir < 0 ? -1 : 1

      let x = down ? mx * 0.3 : 0

      if (!down && trigger) {
        const next = index - dir
        if (next > slides.length - 1) {
          setIndex(0)
        } else if (next < 0) {
          setIndex(slides.length - 1)
        } else {
          setIndex(next)
        }
      }

      setDir(dir)
      set({ x })
    },
  )

  const contentTransitions = useTransition(slides[index], item => item.name, {
    from: { opacity: 0, x: -dir * 100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: dir * 100 },
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
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CarouselPrevious
              display={['none', 'block', 'block']}
              variant="arrow"
              onClick={() =>
                setIndex(index <= 0 ? slides.length - 1 : index - 1)
              }
            />
            <Relative
              css={css({
                display: 'flex',
                flex: '0 0 300px',
                flexBasis: [300, 400, 600],
                width: [100, 200],
                height: [100, 120, 180],
                justifyContent: 'center',
              })}
            >
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
            <CarouselNext
              display={['none', 'block', 'block']}
              variant="arrow"
              onClick={() =>
                setIndex(index >= slides.length - 1 ? 0 : index + 1)
              }
            />
          </Box>
          <Box mt={[5, 5, 8]} width={1} maxWidth={800}>
            <Relative>
              <Content css={css({ opacity: 0 })} slide={slides[index]} />
              {contentTransitions.map(({ props, item, key }) => (
                <Absolute key={key}>
                  <animated.div style={springProps}>
                    <animated.div style={props} key={key}>
                      <Content slide={item} />
                    </animated.div>
                  </animated.div>
                </Absolute>
              ))}
            </Relative>
          </Box>
          <Box mt={[5, 5, 8]}>
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
