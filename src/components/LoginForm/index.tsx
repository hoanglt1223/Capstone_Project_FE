import React, { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import styles from './loginForm.module.scss'
import { Form, FormGroup, Label } from 'reactstrap'
import Button from '../Button'
import useStores from '../../utils/useStore'
import Input from '../Input'
import { observer } from 'mobx-react'
import { getAccessToken } from '../../API'
import { useHistory } from 'react-router-dom'
import routes from '../../routes'
type Login = {
  email: string
  password: string
}

const LoginForm = () => {
  const { UserStore } = useStores()
  const onSubmit = async (data: Login) => {
    const response = await UserStore.login(data)
    console.log(response)
  }
  const methods = useForm<Login>({
    defaultValues: {}
  })
  const history = useHistory()
  useEffect(() => {
    if (getAccessToken()) {
      history.push(routes.mainPage.value)
    }
  }, [])
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
            <Input name="email" type="email" placeholder="Input your username" innerRef={register} />
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
