import React from 'react'
import MyMapComponent from './MyMapComponent'
import { Marker } from 'react-google-maps'
import { loadBackendData } from '../requests'

export default class MapContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }
  }

  makeNewMarker (event) {
    React.createElement(Marker)
  }

  setMarkers () {
    loadBackendData().then(markers => {
      console.log(markers)
      this.setState(prevState => ({
        markers: markers
      }), _ => console.log(this.state.markers))
    })
  }

  componentDidMount () {
    this.setMarkers()
  }

  render (props) {
    return (
      <MyMapComponent makeMarker={this.makeNewMarker.bind(this)} data={this.state.markers} />
    )
  }
}
