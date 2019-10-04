import styled from 'styled-components'
import { space } from 'styled-system'
import css from '@styled-system/css'

const modeMap = {
  dark: 700,
  light: 200,
}

export const Button = styled.button(
  ({ variant = 'primary', mode = 'dark' }) =>
    css({
      backgroundColor: `${variant}.${modeMap[mode]}`,
      color: 'white.base',
      height: 48,
      paddingLeft: 5,
      paddingRight: 5,
      border: 0,
      borderRadius: '24px',
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
