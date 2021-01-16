import { observable, action } from 'mobx'
import { login } from '../API/authenticate'
import { ErrorMessage, IUser } from '../interfaces/user'
import { makeAutoObservable } from 'mobx'
import { setAccessToken } from '../API'

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
    name: '',
    password: '',
    passwordConfirm: ''
  }
  @observable
  isLoginLoading: boolean = false

  @action
  public async login(values: IUser) {
    const { data } = await login(values)
    if (data) {
      const { accessToken, isInactive } = data
      if (isInactive) {
        this.isLoginLoading = false
        return {
          statusCode: 401,
          message: ErrorMessage.ACCOUNT_DISABLED_PLEASE_CONTACT_ADMIN
        }
      }

      if (typeof accessToken === 'string') {
        setAccessToken(accessToken)
        this.isLoginLoading = false
      } else {
        this.isLoginLoading = false
        const errors = data
        return errors
      }
    }
    return {
      statusCode: 201
    }
  }

  @action
  public increase() {
    this.count++
    console.log(this.count)
  }
}
export default UserStore
