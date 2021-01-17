import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form, FormGroup, Label } from 'reactstrap'
import { useStore } from '../../stores/rootStore'
import Button from '../Button'
import Input from '../Input'
import styles from './signUpForm.module.scss'
type SignUp = {
  username: string
  password: string
}

const SignUpForm = () => {
  const { userStore } = useStore()
  const onSubmit = async (data: SignUp) => {
    const response = (await userStore.login(data)) || ''
    console.log(response)
  }
  const methods = useForm<SignUp>({
    defaultValues: {}
  })
  const { register, handleSubmit } = methods
  return (
    <section className={styles.container}>
      <FormProvider {...methods}>
        <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>
            <h4>Sign Up</h4>
          </div>
          <FormGroup controlId="formBasicUsername">
            <Label>Username</Label>
            <Input name="email" type="text" placeholder="Input your username" innerRef={register} />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Input your password" innerRef={register} />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Label>Password</Label>
            <Input name="re-password" type="password" placeholder="confirm your Password" innerRef={register} />
          </FormGroup>
          <div className={styles.buttonContainer}>
            <a href="/" style={{ alignSelf: 'center' }}>
              <Button type="button" outline>
                Back
              </Button>
            </a>
            <Button type="submit" outline>
              Sign Up
            </Button>
          </div>
        </Form>
      </FormProvider>
    </section>
  )
}

export default SignUpForm
