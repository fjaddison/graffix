// https://www.npmjs.com/package/react-google-maps
// the docs from this dependency were vital to this component
// thanks to Tom Chen
import React from 'react'
import './styles/MyMapComponent.css'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import keys from '../keys'

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${keys.GOOGLE_API_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `75%` }} />,
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
    <div className='map-div'>
      <GoogleMap className='map'
        defaultZoom={13}
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
                  options={{ closeBoxURL: ``, enableEventPropagation: false }} >
                  <div className='info-box' style={{ backgroundColor: `#36A954`, opacity: 0.9, padding: `12px` }}>
                    <div style={{ fontSize: `14px`, fontColor: `#08233B` }}>
                      {marker.artist}<br />
                      <a href={marker.image_url}><img src={marker.image_url} style={{width: '90px', height: '50px'}} /></a>
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
