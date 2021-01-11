import get from 'lodash/get'

import { api, errorHandler } from '../API'

export async function getProjects(): Promise<any[]> {
    try {
      const { data } = await api.get('/projects')
      return data
    } catch (err) {
      const error = get(err, 'response.data.error', '')
      errorHandler(error)
      throw error
    }
  }