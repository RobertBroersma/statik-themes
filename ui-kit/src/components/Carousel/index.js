import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'
import { display } from 'styled-system'
import MiniArrowShack from '../../icons/MiniArrowShack'
import ArrowSimple1 from '../../icons/ArrowSimple1'

export const Carousel = ({ children, ...props }) => (
  <div {...props}>{children}</div>
)

const styleMap = {
  shack: () =>
    css({
      boxShadow: 'normal',
      '&:hover': {
        backgroundColor: 'primary.500',
        color: 'white.base',
        boxShadow: 'none',
      },
    }),
  arrow: ({ direction }) =>
    css({
      '&:hover, &:focus': {
        color: 'secondary.200',
        transition: '.2s ease all',
      },
      '&:after': {
        content: '""',
        width: 20,
        height: 36,
        display: 'block',
        position: 'absolute',
        borderTopLeftRadius: direction === 'previous' ? '40px' : 0,
        borderBottomLeftRadius: direction === 'previous' ? '40px' : 0,
        borderTopRightRadius: direction === 'next' ? '40px' : 0,
        borderBottomRightRadius: direction === 'next' ? '40px' : 0,
        border: '2px solid',
        borderColor: 'currentColor',
        borderRight: direction === 'previous' ? 0 : '2px solid',
        borderLeft: direction === 'next' ? 0 : '2px solid',
        top: 0,
        left: direction === 'previous' ? 0 : 'auto',
        right: direction === 'next' ? 0 : 'auto',
        bottom: 0,
      },
    }),
}

export const CarouselButton = styled.button(
  css({
    borderRadius: '50%',
    width: 40,
    height: 40,
    backgroundColor: 'white.base',
    border: 0,
    color: 'gray.500',
    fill: 'white',
    fontSize: 0,
    outline: 0,
    cursor: 'pointer',
    transition: '.2s ease all',
    position: 'relative',
  }),
  ({ variant, ...props }) => styleMap[variant](props),
  display,
)

const iconMap = {
  shack: <MiniArrowShack fill="currentColor" />,
  arrow: (
    <ArrowSimple1 style={{ transform: 'scaleX(-1)' }} fill="currentColor" />
  ),
}

export const CarouselPrevious = ({ variant, ...props }) => (
  <CarouselButton variant={variant} direction="previous" {...props}>
    <div style={{ transform: 'scaleX(-1)' }}>{iconMap[variant]}</div>
  </CarouselButton>
)

export const CarouselNext = ({ variant, ...props }) => (
  <CarouselButton variant={variant} direction="next" {...props}>
    <div>{iconMap[variant]}</div>
  </CarouselButton>
)

export const CarouselCircle = styled.button(({ active }) =>
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
