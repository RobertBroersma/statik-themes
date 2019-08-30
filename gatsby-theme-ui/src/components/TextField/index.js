import React, { useMemo } from 'react'
import styled from 'styled-components'
import { uniqueId } from 'lodash'
import { Box } from '../Box'

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray[4]};
  border-radius: 2px;
  height: 55px;
  outline: 0;
  padding: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  transition: 0.2s ease all;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`

const Label = styled.label``

export const TextField = ({ label, ...rest }) => {
  const id = useMemo(() => uniqueId())
  return (
    <Box>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} />
    </Box>
  )
}
