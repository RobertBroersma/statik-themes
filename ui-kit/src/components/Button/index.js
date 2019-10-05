import styled from 'styled-components'
import { space } from 'styled-system'
import css from '@styled-system/css'

const modeMap = {
  dark: 700,
  light: 200,
}

const shapeMap = {
  rounded: '24px',
  square: 2,
}

const sizeMap = {
  normal: 48,
  large: 56,
}

export const Button = styled.button(
  ({
    variant = 'primary',
    mode = 'dark',
    shape = 'rounded',
    size = 'normal',
  }) =>
    css({
      backgroundColor: `${variant}.${modeMap[mode]}`,
      color: 'white.base',
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      height: sizeMap[size],
      paddingLeft: 5,
      paddingRight: 5,
      border: 0,
      flex: `1 1 auto`,
      borderRadius: shapeMap[shape],
      boxShadow: 'small',
      textTransform: 'uppercase',
      letterSpacing: 1.25,
      cursor: 'pointer',
      transition: '.2s ease all',
      outline: 0,
      position: 'relative',
      '&:hover': {
        backgroundColor: `${variant}.${modeMap[mode] + 200}`,
      },
      '&:after': {
        margin: '-6px',
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        borderRadius: '28px',
        border: '2px solid',
        borderColor: `${variant}.${modeMap[mode] + 200}`,
        opacity: 0,
        transition: '.2s ease all',
      },
      '&:focus': {
        '&:after': {
          opacity: 1,
        },
      },
    }),
  space,
)
