import React, { Component } from 'react'
import { submitNewPiece } from '../requests'

export default class SubmitForm extends Component {
  constructor () {
    super()
    this.state = {
      artist: '',
      image_url: '',
      neighborhood: '',
      lat: null,
      lng: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleNumberChange (event) {
    this.setState({
      ...this.state,
      [event.target.name]: parseFloat(event.target.value)
    })
  }

  handleSubmit (event) {
    // event.preventDefault()
    submitNewPiece(this.state)
  }

  render () {
    return (
      <div className='form-div' >
        <form>
          <input className='form-unit' onChange={this.handleChange} placeholder='Artist' name='artist' />
          <input className='form-unit' onChange={this.handleChange} placeholder='Image URL' name='image_url' />
          <input className='form-unit' onChange={this.handleChange} placeholder='Neighborhood' name='neighborhood' />
          <input className='form-unit' onChange={this.handleNumberChange} placeholder='Latitude' name='lat' />
          <input className='form-unit' onChange={this.handleNumberChange} placeholder='Longitude' name='lng' /><br /><br />
          <button className='form-unit' onClick={this.handleSubmit} type='submit' >Submit</button>
        </form>
      </div>
    )
  }
}
