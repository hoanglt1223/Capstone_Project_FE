import ProjectStore from './projectStore'
import UserStore from './userStore'

const isServer = typeof window === 'undefined'

let store: {
  ProjectStore: ProjectStore
  UserStore: UserStore
} | null = null

export default function initializeStore(this: unknown) {
  if (isServer) {
    return {
      ProjectStore: new ProjectStore(this),
      UserStore: new UserStore(this)
    }
  }
  if (store === null) {
    store = {
      ProjectStore: new ProjectStore(this),
      UserStore: new UserStore(this)
    }
  }

  return store
}
