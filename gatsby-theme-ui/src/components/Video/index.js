import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  * + & {
    margin-top: 1.5rem;
  }
`

const Player = styled(ReactPlayer).attrs({
  width: '100%',
  height: '100%',
})`
  position: absolute;
  top: 0;
  left: 0;
`

export const Video = ({ url, ...rest }) => (
  <PlayerWrapper {...rest}>
    <Player url={url} />
  </PlayerWrapper>
)
