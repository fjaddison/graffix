import axios from 'axios'
import { DB_URL } from './constants'

export const loadBackendData = () => {
  console.log('looking for markers')
  return axios.get(DB_URL).then(res => {
    let pieces = res.data.map(piece => piece)
    console.log(pieces)
    return pieces
  })
}

export const submitNewPiece = (newPiece) => {
  console.log(newPiece)
  return axios.post(DB_URL, newPiece)
}
