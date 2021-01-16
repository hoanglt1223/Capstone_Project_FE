import get from 'lodash/get'
import { api, errorHandler } from '../API'
import { IUser } from '../interfaces/user'

export async function login(values: IUser) {
  try {
    const { data } = await api.post('/auth/login', values)
    return data
  } catch (err) {
    const error = get(err, 'response.data.error', '')
    errorHandler(error)
    throw error
  }
}
