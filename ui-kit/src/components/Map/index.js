import React from 'react'
import PigeonMap from 'pigeon-maps'
export { default as Marker } from 'pigeon-marker/react'

export const Map = ({ center, zoom, ...props }) => {
  return (
    <PigeonMap
      metaWheelZoom={true}
      defaultCenter={[center.lat, center.lng]}
      defaultZoom={zoom}
      attribution={false}
      {...props}
    />
  )
}
