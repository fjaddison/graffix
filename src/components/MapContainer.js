// https://www.npmjs.com/package/react-google-maps
// the docs from this dependency is the majority of the code
import React from 'react'
import MyMapComponent from './MyMapComponent'

export default class MapContainer extends React.PureComponent {
  render () {
    return (
      <MyMapComponent />
    )
  }
}
