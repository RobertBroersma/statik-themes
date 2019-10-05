import React, { useMemo, useState, useCallback } from 'react'
import css from '@styled-system/css'
import styled from 'styled-components'
import { uniqueId } from 'lodash'
import { Box } from '../Box'

export const Input = styled.input(({ hasAddon }) =>
  css({
    width: '100%',
    border: '1px solid',
    borderColor: 'gray.300',
    color: 'gray.700',
    borderRadius: 2,
    height: 56,
    outline: 0,
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 2,
    fontSize: 1,
    fontFamily: 'normal',
    fontSize: 2,
    transition: '0.2s ease all',
    borderTopRightRadius: hasAddon ? 0 : 2,
    borderBottomRightRadius: hasAddon ? 0 : 2,
    borderRight: hasAddon ? 0 : '1px solid',
    '&:hover': {
      borderColor: 'gray.600',
    },
    '&:focus': {
      borderColor: 'gray.600',
    },
  }),
)

const Label = styled.label(
  css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
  }),
)

const LabelText = styled.span(({ value }) =>
  css({
    display: 'block',
    transition: '.2s ease all',
    transformOrigin: '0 0',
    transform: value ? 'scale(0.8) translateY(-8px)' : 'none',
  }),
)

const LabelTextWrapper = styled.span(
  css({
    border: '1px solid transparent',
    paddingLeft: 3,
    paddingRight: 3,
    position: 'absolute',
    [`${Input}:focus + & ${LabelText}`]: {
      transform: 'scale(0.8) translateY(-8px)',
    },
  }),
)

const AddonWrapper = styled.div(
  css({
    height: 56,
    border: '1px solid',
    borderColor: 'secondary.400',
    display: 'flex',
    flexDirection: 'column',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderLeft: 0,
  }),
)

export const TextField = ({ label, value, onChange, addOn, ...rest }) => {
  const id = useMemo(() => uniqueId(), [])
  const [internalValue, setValue] = useState(value || '')

  const handleChange = useCallback(
    e => {
      setValue(e.target.value)
      if (onChange) {
        onChange(e.target.value)
      }
    },
    [onChange],
  )

  return (
    <Box display="flex">
      <Label htmlFor={id}>
        <Input
          id={id}
          value={value || internalValue}
          onChange={handleChange}
          hasAddon={!!addOn}
          {...rest}
        />
        <LabelTextWrapper>
          <LabelText value={value || internalValue}>{label}</LabelText>
        </LabelTextWrapper>
      </Label>
      <AddonWrapper>{addOn}</AddonWrapper>
    </Box>
  )
}
