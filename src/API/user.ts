import get from 'lodash/get'
import { api, errorHandler } from '../API'
import { ISignUp } from '../components/SignUpForm'

export async function createUser(values: ISignUp) {
  try {
    const { data } = await api.post('/users/create', values)
    return data
  } catch (err) {
    const error = get(err, 'response.data.error', '')
    errorHandler(error)
    throw error
  }
}
