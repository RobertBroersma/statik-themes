import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

export const Box = styled.div`
  min-width: 0;
  
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`

const containerSizes = {
  medium: 720,
  large: 1140,
}

export const Container = styled(Box)`
  margin: 0 auto;
  max-width: ${({ size = 'large' }) => containerSizes[size]}px;
`
