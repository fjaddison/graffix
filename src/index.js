import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

// these are from the scripts from the HTML rendering of Google Maps with markers
// function initMap () {
//   // this sets the initial point of view
//   let options = {
//     zoom: 13,
//     center: {
//       lat: 38.9072,
//       lng: -77.0369
//     }
//   }
//   let map = new
//   google.maps.Map(document.getElementById('map'), options)

//   // add event listener to add marker on click
//   google.maps.event.addListener(map, 'click', function (event) {
//     addMarker({coords: event.latLng})
//   })

//   // array of markers
//   let markers = [
//     {
//     coords: {lat: 38.914081, lng: -77.032639},
//     content: '<h1>Voyer: U Street Corridor</h1><br /><img src="https://i.imgur.com/XIcKTav.jpg" height="100" width="180">'
//     }
//   ]

//   for (let i =0; i < markers.length; i++) {
//     addMarker(markers[i])
//   }

//   //add marker function
//   function addMarker (props) {
//     let marker = new
//   // 38.914081, -77.032639
//     google.maps.Marker({
//       position: props.coords,
//       map: map
//     })
//     if (props.content) {
//       let infoWindow = new
//       google.maps.InfoWindow({
//         content: props.content
//       })
//       marker.addListener('click', function() {
//         infoWindow.open(map, marker)
//       })
//     }
//   }
// }
