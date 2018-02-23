import React from 'react'
import MyMapComponent from './MyMapComponent'
import { loadBackendData } from '../requests'
import './styles/MapContainer.css'

export default class MapContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      markers: []
    }
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
      <div className='map-container' >
        <MyMapComponent data={this.state.markers} />
      </div>
    )
  }
}
