import { Hotel } from '@components/models/hotel'
import Flex from '@components/shared/Flex'
import Spacing from '@components/shared/Spacing'
import Text from '@components/shared/Text'
import { css } from '@emotion/react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useCallback } from 'react'

const Map = ({ location }: { location: Hotel['location'] }) => {
  const {
    directions,
    pointGeolocation: { x, y },
  } = location
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_ID as string,
  })
  if (isLoaded === false) {
    return null
  }
  return (
    <Flex direction="column" style={{ padding: '24px' }}>
      <Text bold typography="t4">
        기본정보
      </Text>
      <Spacing size={8} />
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '250px',
          margin: '16px 0',
          boxSizing: 'border-box',
        }}
        center={{ lat: y, lng: x }}
        zoom={15}
      >
        <Marker position={{ lat: y, lng: x }} />
      </GoogleMap>
    </Flex>
  )
}

export default Map
