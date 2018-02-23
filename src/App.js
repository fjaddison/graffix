import React, { Component } from 'react'
import MapContainer from './components/MapContainer'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App' id='app'>
        <Header />
        <MapContainer />
        <Footer />
      </div>
    )
  }
}

export default App
