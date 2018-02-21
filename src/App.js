import React, { Component } from 'react'
import MapContainer from './components/MapContainer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App' id='app'>
        <p>this is the react App component</p>
        <MapContainer />
      </div>
    )
  }
}

export default App
