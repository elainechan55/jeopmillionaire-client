import apiUrl from '../apiConfig'
import axios from 'axios'

// create a new gameboard
export const gameboardCreate = (gameboard, user) => {
  return axios({
    url: apiUrl + '/gameboards',
    method: 'POST',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}
