import styled from 'styled-components'
import { space, color, layout, flexbox, typography } from 'styled-system'
import { css } from '@styled-system/css'

export const Box = styled.div`
  min-width: 0;
  
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${typography}
`

export const Container = styled(Box)(({ size = 1200 }) =>
  css({
    margin: '0 auto',
    maxWidth: size,
  }),
)
