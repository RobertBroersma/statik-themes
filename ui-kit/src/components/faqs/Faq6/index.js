import React, { useState } from 'react'
import Collapse from 'react-css-collapse'
import css from '@styled-system/css'

import PlusSimple1 from '../../../icons/PlusSimple1'
import MinusSimple from '../../../icons/MinusSimple'
import { Box, Container } from '../../Box'
import { H3, Text, H4, H5 } from '../../Typography'

const Faq = React.memo(({ question, answer, defaultOpen = false, ...rest }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  return (
    <Box
      css={css({
        borderTop: '1px solid',
        borderColor: 'gray.400',
        '&:last-child': { borderBottom: '1px solid', borderColor: 'gray.400' },
      })}
      py={3}
      {...rest}
    >
      <H4
        as="button"
        fontSize={3}
        fontWeight="medium"
        onClick={() => setOpen(!isOpen)}
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        })}
      >
        <span>{question}</span>
        <span
          css={css({
            fontSize: 1,
            color: isOpen ? 'primary.600' : 'secondary.200',
            transition: '.25s ease color',
            marginLeft: 2,
          })}
        >
          {isOpen ? <MinusSimple /> : <PlusSimple1 />}
        </span>
      </H4>
      <Collapse isOpen={isOpen} aria-hidden={isOpen ? 'false' : 'true'}>
        <Box pt={3} color="gray.600">
          {answer}
        </Box>
      </Collapse>
    </Box>
  )
})

export const Faq6 = ({ title, intro, faqs }) => {
  return (
    <Box py={8} px={2}>
      <Container
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <H3 fontWeight="normal">{title}</H3>
        <Text fontSize={3} color="gray.600" fontWeight="medium" mt={2}>
          {intro}
        </Text>
        <Box maxWidth={800} mt={6} textAlign="left">
          {faqs.map(faq => (
            <Faq key={faq.question} {...faq} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
