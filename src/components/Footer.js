import React, { Component } from 'react'
import SubmitForm from './SubmitForm'
import './styles/Footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer' >
        <h3>Submit a New Image</h3>
        <SubmitForm />
      </div>
    )
  }
}
