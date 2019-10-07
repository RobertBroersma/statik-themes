import styled from 'styled-components'
import { typography, color, layout, space } from 'styled-system'
import css from '@styled-system/css'

export const Note = styled.span`
  letter-spacing: 2px;
  font-size: 1.2rem;
  text-transform: uppercase;
`

const textAsButton = css({
  background: 0,
  border: 0,
  width: '100%',
  outline: 0,
  padding: 0,
  textAlign: 'inherit',
  '&:focus': {
    color: 'secondary.200',
  },
})

const shared = css(
  {
    margin: 0,
    lineHeight: 1,
    color: 'bodytext',
  },
  textAsButton,
)

export const H1 = styled.h1(
  css({
    fontSize: [6, 7, 8],
  }),
  shared,
)

export const H2 = styled.h2(
  css({
    fontSize: [5, 6, 7],
    fontWeight: 'extrabold',
  }),
  shared,
  layout,
  space,
  typography,
)

export const H3 = styled.h3(
  css({
    fontSize: [5, 5, 6],
    fontWeight: 'normal',
  }),
  shared,
  layout,
  space,
  typography,
)
export const H4 = styled.h4(
  css({
    fontSize: 5,
  }),
  shared,
  layout,
  space,
  typography,
)

export const H5 = styled.h4(
  css({
    fontSize: 4,
  }),
  shared,
  layout,
  space,
  typography,
)

export const Text = styled.p(
  css({
    margin: 0,
  }),
  textAsButton,
  typography,
  layout,
  space,
  color,
)
