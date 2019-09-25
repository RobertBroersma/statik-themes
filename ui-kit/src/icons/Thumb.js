import React from 'react'

const SvgThumb = props => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path
      d="M14 5h-4V2a2 2 0 00-2-2H7a2 2 0 00-1.857 1.257L3.643 5H2a2 2 0 00-2 2v7a2 2 0 002 2h2a2 2 0 012 0h4a2 2 0 001.414-.586l2.563-2.562 1.437-1.438A2 2 0 0016 10V7a2 2 0 00-2-2zM2 14V7h1v7H2zm12-4l-1.438 1.437L10 14H6l-1-1V7l2-5h1v5h6v3z"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgThumb
