import { observable, action } from 'mobx'
import { login } from '../API/authenticate'
import { IUser } from '../interfaces/user'

import { makeAutoObservable } from 'mobx'
class UserStore {
  rootStore: unknown

  constructor(rootStore: unknown) {
    this.rootStore = rootStore
    makeAutoObservable(this)
  }

  @observable count: number = 0
  increaseIt() {
    this.count += 1
    console.log('TCL ~ file: userStore.ts ~ line 17 ~ UserStore ~ increaseIt ~ this.count', this.count)
  }

  @observable user: IUser = {
    email: '',
    fullName: ''
  }

  @action
  public async login(values: IUser) {
    const response = await login(values)
    if (response) {
      console.log(response)
    }
  }

  @action
  public increase() {
    this.count++
    console.log(this.count)
  }
}
export default UserStore
