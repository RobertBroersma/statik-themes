import React from 'react'
import styled from 'styled-components'
import { Box, Container } from '../Box'

const FooterContainer = styled.div`
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[3]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
`

export const Footer = props => (
  <FooterContainer>
    <Box px={2}>
      <Container {...props} mt={4}>
        <Box display="flex" alignItems="center" justifyContent="center" py={5}>
          <p>
            Created with ❤️ by <strong>Statik</strong> using{' '}
            <strong>Gatsby</strong>
          </p>
        </Box>
      </Container>
    </Box>
  </FooterContainer>
)
