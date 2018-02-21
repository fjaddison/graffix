// https://www.npmjs.com/package/react-google-maps
// the docs from this dependency provide the majority of the codebase here
import React from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import keys from '../keys'

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${keys.GOOGLE_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
    isOpen: false
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap
)(
  (props) =>
    <div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 38.9072, lng: -77.0369 }} >
        <div>
          {props.data.map((marker, index) => {
            return (
              <Marker key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={props.onToggleOpen} >
                {props.isOpen &&
                <InfoBox
                  onCloseClick={props.onToggleOpen}
                  options={{ closeBoxURL: ``, enableEventPropagation: true }} >
                  <div style={{ backgroundColor: `#6FC3CC`, opacity: 0.9, padding: `12px` }}>
                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                      {marker.artist}
                      <a href={marker.image_url}><img src={marker.image_url} style={{width: '180px', height: '100px'}} /></a>
                    </div>
                  </div>
                </InfoBox>}
              </Marker>
            )
          })}
        </div>
      </GoogleMap>
    </div>
)

export default MyMapComponent
