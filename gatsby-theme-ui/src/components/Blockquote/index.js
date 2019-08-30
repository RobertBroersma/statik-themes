import React from 'react'
import styled from 'styled-components'
import { breaks } from '../../theme'

const BlockquoteWrapper = styled.blockquote`
  font-size: 1.7em;
  text-align: center;
  line-height: 1.2;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${({ theme }) => theme.space[4]}px 0;

  ${breaks.large} {
    margin-left: calc(360px - 45vw);
    margin-right: calc(360px - 45vw);
  }

  @media (min-width: 1140px) {
    margin-left: -180px;
    margin-right: -180px;
  }
`

const Text = styled.span`
  font-style: italic;
`

const Quote = styled.span`
  font-size: 4rem;
`

const Cite = styled.cite`
  text-transform: uppercase;
  font-style: normal;
  font-size: 0.65em;
  display: block;
  margin-top: 3rem;
  letter-spacing: 2px;
`

const Border = styled.div`
  height: 1px;
  width: 200px;
  background: ${({ theme }) => theme.colors.gray[3]};
`

export const Blockquote = ({ children, by, ...rest }) => (
  <BlockquoteWrapper {...rest}>
    <Border css="margin-bottom: 3rem;" />
    <div>
      <Quote>“</Quote>
      <Text>{children}</Text>
      <Quote>”</Quote>
      <Cite>― {by} ―</Cite>
    </div>
    <Border css="margin-top: 4rem;" />
  </BlockquoteWrapper>
)
