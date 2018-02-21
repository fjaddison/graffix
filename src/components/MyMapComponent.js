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
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 38.9072, lng: -77.0369 }} >
      <Marker
        position={{ lat: 38.914081, lng: -77.032639 }}
        onClick={props.onToggleOpen} >
        {props.isOpen &&
        <InfoBox
          onCloseClick={props.onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true }} >
          <div style={{ backgroundColor: `#6FC3CC`, opacity: 0.9, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              <h3>Voyer: U St Corridor</h3>
              <img src='https://i.imgur.com/XIcKTav.jpg' style={{width: '180px', height: '100px'}} />
            </div>
          </div>
        </InfoBox>}
      </Marker>
    </GoogleMap>
)

export default MyMapComponent
