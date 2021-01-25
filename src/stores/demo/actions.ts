import { action } from 'typesafe-actions'
import { IUser } from '../../interfaces/user'
import { Constants } from './constants'
export function addItemToList(item: string) {
  console.log('TCL ~ file: actions.ts ~ line 4 ~ addItemToList ~ item', item)
  return action(Constants.ADD_ITEM, {
    item
  })
}

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading
  })
}

export function loginRedux(item: IUser) {
  return action(Constants.LOGIN, {
    item
  })
}
