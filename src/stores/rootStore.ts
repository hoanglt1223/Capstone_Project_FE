import { createContext, useContext } from 'react'
import ProjectStore from './projectStore'
import UserStore from './userStore'

export interface IStore {
  projectStore: ProjectStore
  userStore: UserStore
}
export const store: IStore = {
  projectStore: new ProjectStore(),
  userStore: new UserStore()
}
export const StoreContext = createContext(store)
export const useStore = () => {
  return useContext(StoreContext)
}
