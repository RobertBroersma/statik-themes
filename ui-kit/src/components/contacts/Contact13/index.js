import React from 'react'
import { Map, Marker } from '../../Map'
import { Box } from '../../Box'
import { Text } from '../../Typography'

import mapIcon from './mapMarker.svg'
import phoneIcon from './headset.svg'

export const Contact13 = ({
  location,
  address,
  phoneNumbers,
  icons,
  ...rest
}) => (
  <Box
    minHeight={400}
    width={1}
    display="flex"
    alignItems="stretch"
    flexWrap="wrap"
  >
    <Box
      flex={['1 0 100%', '1 0 100%', '1 0 50%']}
      display="flex"
      minHeight={400}
    >
      <Map center={location} zoom={14}>
        <Marker anchor={[location.lat, location.lng]} />
      </Map>
    </Box>
    <Box flex={['1 0 100%', '1 0 100%', '1 0 50%']}>
      <Box
        maxWidth={600}
        px={[2, 2, 15]}
        py={[4, 4, 15]}
        display="flex"
        flexWrap="wrap"
        flexDirection={['row', 'row', 'column']}
      >
        <Box flex="1 0 50%">
          <Text fontSize={4}>
            <img src={mapIcon} alt="map icon" />
          </Text>
          <Text mt={3} fontSize={3} fontWeight="medium" color="gray.800">
            Address
          </Text>
          <Text mt={2} fontSize={2} color="gray.500">
            {address.split('\n').map((item, key) => (
              <React.Fragment key={key}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </Text>
        </Box>
        <Box mt={[0, 0, 6]} flex="1 0 50%">
          <Text fontSize={4}>
            <img src={phoneIcon} alt="phone icon" />
          </Text>
          <Text mt={3} fontSize={3} fontWeight="medium" color="gray.800">
            Phone Numbers
          </Text>
          <Text mt={2} fontSize={2} color="gray.500">
            {phoneNumbers.map((number, key) => (
              <React.Fragment key={key}>
                {number}
                <br />
              </React.Fragment>
            ))}
          </Text>
        </Box>
        <Box mt={6} flex="1 0 100%">
          {icons}
        </Box>
      </Box>
    </Box>
  </Box>
)
