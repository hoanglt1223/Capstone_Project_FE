import axios from 'axios'

import { IServerError } from '../interfaces/error'

const { API_URL } = { API_URL: process.env.API_URL || 'http://localhost:3001/v1' }

export const api = axios.create({
  baseURL: API_URL
})

export function auth() {
  const accessToken = getAccessToken()
  return { Authorization: `Bearer ${accessToken}` }
}

export function errorHandler(error: IServerError) {
  switch (error.statusCode) {
    case 401:
      if (error.message === 'Error verifying token : jwt expired') {
        setAccessToken('')
        alert('Your access token expires, please login again')
      } else {
        alert('You are unauthorized to access')
      }
      break
  }
}

export function getAccessToken(): string {
  return localStorage.getItem('token') || ''
}

export function setAccessToken(token: string = '') {
  localStorage.setItem('token', token)
}
