import React, { useMemo } from 'react'
import styled from 'styled-components'
import { uniqueId } from 'lodash'
import { Box } from '../Box'
import { Input } from '../TextField'

const TextAreaInput = styled(Input).attrs({
  as: 'textarea',
})`
  min-height: 200px;
  min-width: 100%;
  max-width: 100%;
`

const Label = styled.label`
  display: block;
`

export const TextArea = ({ label, ...rest }) => {
  const id = useMemo(() => uniqueId(), [])
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <TextAreaInput id={id} {...rest} />
    </Box>
  )
}
