import axios from 'axios'
// import DB_URL from './constants'

export const loadBackendData = () => {
  console.log('looking for markers')
  return axios.get('http://localhost:3000/api/v1/pieces.json').then(res => {
    let pieces = res.data.map(piece => piece)
    console.log(pieces)
    return pieces
  })
}

export const submitNewPiece = (newPiece) => {
  console.log(newPiece)
  return axios.post('http://localhost:3000/api/v1/pieces.json', newPiece)
}
