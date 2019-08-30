import styled, { css } from 'styled-components'
import { typography, color } from 'styled-system'

export const Note = styled.span`
  letter-spacing: 2px;
  font-size: 1.2rem;
  text-transform: uppercase;
`

const shared = css`
  margin: 0;
  line-height: ${({ theme }) => theme.lineHeights[1]};
  color: #2f313e;

  * + & {
    margin-top: 3rem;
  }

  ${Note} + & {
    margin-top: 0;
  }

  h1 + &,
  h2 + &,
  h3 + &,
  h4 + & {
    margin-top: 1.5rem;
  }
`

export const H1 = styled.h1`
  ${shared}

  font-size: ${({ theme }) => theme.fontSizes[6]};
`
export const H2 = styled.h2`
  ${shared}

  font-size: ${({ theme }) => theme.fontSizes[5]};
`
export const H3 = styled.h3`
  ${shared}

  font-size: ${({ theme }) => theme.fontSizes[4]};
`
export const H4 = styled.h4`
  ${shared}

  font-size: ${({ theme }) => theme.fontSizes[3]};
`
export const Text = styled.p`
  margin: 0;

  * + & {
    margin-top: 3rem;
  }

  h1 + &,
  h2 + &,
  h3 + &,
  h4 + & {
    margin-top: 1.5rem;
  }

  ${typography}
  ${color}
`
export const Link = styled.a``
