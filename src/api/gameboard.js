import apiUrl from '../apiConfig'
import axios from 'axios'

/* ~~~~~~~~~~~ GAMEBOARDS ~~~~~~~~~~~ */
// create a new gameboard
export const gameboardCreate = user => {
  return axios({
    url: apiUrl + '/gameboards',
    method: 'POST',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

// update a gameboard
export const gameboardUpdate = (id, gameboard, user) => {
  return axios({
    url: apiUrl + '/gameboards/' + id,
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${user.token}` },
    data: { gameboard }
  })
}

// get all gameboards for user - INDEX
export const gameboardIndex = user => {
  return axios({
    url: apiUrl + '/gameboards',
    method: 'GET',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

export const gameboardShow = (id, user) => {
  return axios({
    url: apiUrl + '/gameboards/' + id,
    method: 'GET',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

/* ~~~~~~~~~~~ RESPONSES ~~~~~~~~~~~ */
export const responseCreate = (response, user) => {
  return axios({
    url: apiUrl + '/responses',
    method: 'POST',
    headers: { 'Authorization': `Bearer ${user.token}` },
    data: { response }
  })
}
