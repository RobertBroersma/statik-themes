import React from 'react'

import { Text } from '@statikly/ui-kit/src/components/Typography'

export const TextWidget = ({ title, body }) => (
  <>
    <Text fontSize={3} css={{ textTransform: 'uppercase' }}>
      {title}
    </Text>
    <Text mt={2} fontSize={2} color="white.dark">
      {body.split('\n').map((item, key) => (
        <React.Fragment key={key}>
          {item}
          <br />
        </React.Fragment>
      ))}
    </Text>
  </>
)
