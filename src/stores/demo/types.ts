import { ActionType } from 'typesafe-actions'
import { IUser } from '../../interfaces/user'
import * as actions from './actions'
export type DemoActions = ActionType<typeof actions>

export interface IDemoState {
  list: string[]
  loading: boolean
  user: IUser
}
