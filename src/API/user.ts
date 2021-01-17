import get from 'lodash/get'
import { api, errorHandler } from '../API'

export async function createUser(values: any) {
  try {
    const { data } = await api.post('/user/create', values)
    return data
  } catch (err) {
    const error = get(err, 'response.data.error', '')
    errorHandler(error)
    throw error
  }
}
