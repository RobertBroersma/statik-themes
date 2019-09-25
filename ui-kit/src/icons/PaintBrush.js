import React from 'react'

const SvgPaintBrush = props => (
  <svg width="1em" height="1em" viewBox="0 0 12 16" {...props}>
    <path
      d="M10 0H2a2.006 2.006 0 00-2 2v6a3.992 3.992 0 003.01 3.87A.57.57 0 003 12v1.18A2.817 2.817 0 005.82 16h.36A2.817 2.817 0 009 13.18V12a.57.57 0 00-.01-.13A3.992 3.992 0 0012 8V2a2.006 2.006 0 00-2-2zM7 13.18a.824.824 0 01-.82.82h-.36a.824.824 0 01-.82-.82V12h2v1.18zM8 10H4a2.006 2.006 0 01-2-2h8a2.006 2.006 0 01-2 2zm2-4H2V2.5a.5.5 0 011 0V4a1 1 0 002 0V2.5a.5.5 0 011 0V3a1 1 0 002 0v-.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V6z"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgPaintBrush
