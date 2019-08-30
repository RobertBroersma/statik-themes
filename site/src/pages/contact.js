import React from 'react'
import { Layout, H1, Box, Container } from '@statikly/gatsby-theme-ui'
import { TextField, TextArea } from '@statikly/gatsby-theme-ui'

const Contact = props => (
  <Layout>
    <Box px={2}>
      <Container size="medium">
        <H1>Contact</H1>
        <Box mt={4}>
          <TextField label="Name" type="text" />
        </Box>
        <Box mt={4}>
          <TextField label="E-mail" type="text" />
        </Box>
        <Box mt={4}>
          <TextArea label="Message" />
        </Box>
      </Container>
    </Box>
  </Layout>
)

export default Contact
