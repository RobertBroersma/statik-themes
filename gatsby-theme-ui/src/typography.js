import styled, { css } from 'styled-components'

export const Note = styled.span`
  letter-spacing: 2px;
  font-size: 1.2rem;
  text-transform: uppercase;
`

const shared = css`
  margin: 0;
  line-height: 1.2;
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

  font-size: 4rem;
`
export const H2 = styled.h2`
  ${shared}

  font-size: 3.6rem;
`
export const H3 = styled.h3`
  ${shared}

  font-size: 3rem;
`
export const H4 = styled.h4`
  ${shared}

  font-size: 2.4rem;
`
export const Paragraph = styled.p`
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
`
export const Link = styled.a``
