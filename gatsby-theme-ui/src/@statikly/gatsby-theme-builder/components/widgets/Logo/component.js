import React from 'react'
import { Link } from 'gatsby'

import { Image } from '@statikly/ui-kit/src/components/Image'

export const Logo = ({ src }) => (
  <Link to="/">
    <Image src={src} />
  </Link>
)
