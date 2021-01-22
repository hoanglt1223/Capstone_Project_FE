import { Dispatch } from 'redux'
import * as actions from './actions'
import { DemoActions } from './types'
function sleep(timeout: number) {
  return new Promise<void>(resolve => setTimeout(() => resolve(), timeout))
}
export async function addItemAsync(dispatch: Dispatch<DemoActions>, item: string) {
  dispatch(actions.setLoading(true))
  dispatch(actions.addItemToList(item))
  await sleep(200)
  dispatch(actions.setLoading(false))
}
