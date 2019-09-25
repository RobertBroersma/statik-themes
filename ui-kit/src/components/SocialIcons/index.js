import React from 'react'

export const SocialIcons = ({ icons }) => {
  return (
    <div>
      {icons.map(icon => (
        <div>
          <a href={icon.link}>{icon.name}</a>
        </div>
      ))}
    </div>
  )
}
