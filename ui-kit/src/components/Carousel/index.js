import React from 'react'
import styled from 'styled-components/macro'
import css from '@styled-system/css'
import MiniArrowShack from '../../icons/MiniArrowShack'

export const Next = styled.button(
  css({
    backgroundColor: 'white.base',
    width: 40,
    height: 40,
  }),
)

export const Carousel = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

export const CarouselButton = styled.button(
  css({
    borderRadius: '50%',
    width: 40,
    height: 40,
    boxShadow: 'normal',
    backgroundColor: 'white.base',
    border: 0,
    color: 'gray.500',
    fill: 'white',
    fontSize: 0,
    outline: 0,
    cursor: 'pointer',
    transition: '.2s ease all',
    '&:hover': {
      backgroundColor: 'primary.500',
      color: 'white.base',
      boxShadow: 'none',
      transform: 'translateY(4px)',
    },
  }),
)

export const CarouselPrevious = props => (
  <CarouselButton {...props}>
    <MiniArrowShack style={{ transform: 'scaleX(-1)' }} fill="currentColor" />
  </CarouselButton>
)

export const CarouselNext = props => (
  <CarouselButton {...props}>
    <MiniArrowShack fill="currentColor" />
  </CarouselButton>
)
