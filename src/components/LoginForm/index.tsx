import { observer } from 'mobx-react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormGroup, Label } from 'reactstrap'
import { IUser } from '../../interfaces/user'
import { IRootState } from '../../stores'
import { loginRedux } from '../../stores/demo/actions'
import { useStore } from '../../stores/rootStore'
import Button from '../Button'
import Input from '../Input'
import styles from './loginForm.module.scss'
type Login = {
  email: string
  password: string
}

const LoginForm = () => {
  const user = useSelector((state: IRootState) => state.demo.user)
  console.log('TCL ~ file: index.tsx ~ line 20 ~ LoginForm ~ user', user)
  const dispatch = useDispatch()
  const login = (input: IUser) => dispatch(loginRedux(input))

  const { userStore } = useStore()
  const onSubmit = async (data: IUser) => {
    const response = await dispatch(loginRedux(data))
    // console.log(response)
  }
  const methods = useForm<Login>({
    defaultValues: {}
  })
  // const history = useHistory()
  // const token = getAccessToken() || ''
  // useEffect(() => {
  //   if (token) {
  //     history.push(routes.mainPage.value)
  //   }
  // }, [token])
  const { register, handleSubmit } = methods
  return (
    <section className={styles.container}>
      <FormProvider {...methods}>
        <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>
            <h4>Login</h4>
          </div>
          <FormGroup controlId="formBasicEmail">
            <Label>Email:</Label>
            <Input name="email" type="email" placeholder="Input your email" innerRef={register} />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Label>Password:</Label>
            <Input name="password" type="password" placeholder="Input your password" innerRef={register} />
          </FormGroup>
          <FormGroup controlId="formBasicCheckbox">
            <Input className={styles.inputCheckbox} name="remember" type="checkbox" /> Remember me
          </FormGroup>
          <Button type="submit" className="button" outline>
            Login
          </Button>
          <a href="/signUp" style={{ alignSelf: 'center' }}>
            <Button type="button" className="button" outline>
              Sign Up
            </Button>
          </a>
        </Form>
      </FormProvider>
    </section>
  )
}

export default observer(LoginForm)
