import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form, FormGroup, Label } from 'reactstrap'
import { useStore } from '../../stores/rootStore'
import Button from '../Button'
import Input from '../Input'
import styles from './signUpForm.module.scss'
import { observer } from 'mobx-react'
export interface ISignUp {
  email: string
  password: string
  // eslint-disable-next-line camelcase
  password_confirmation: string
}

const SignUpForm = () => {
  const { userStore } = useStore()
  const methods = useForm<ISignUp>({
    defaultValues: {},
    reValidateMode: 'onChange'
  })
  const { register, handleSubmit, errors } = methods
  const onSubmit = async (userData: ISignUp) => {
    const formattedUser = {
      email: userData.email,
      password: userData.password,
      // eslint-disable-next-line camelcase
      password_confirmation: userData.password_confirmation
    }
    await userStore.signUp(formattedUser)
  }
  return (
    <section className={styles.container}>
      <FormProvider {...methods}>
        <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>
            <h4>Sign Up</h4>
          </div>
          <FormGroup controlId="formBasicUsername">
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="Input your email" innerRef={register} />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Input your password"
              innerRef={register({
                required: {
                  value: true,
                  message: 'password is required'
                },
                minLength: {
                  value: 8,
                  message: 'password should contain at least 8 characters'
                }
              })}
            />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Label>Confirm Password</Label>
            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirm your Password"
              innerRef={register({
                required: {
                  value: true,
                  message: 'confirm password is required'
                },
                minLength: {
                  value: 8,
                  message: 'confirm password should contain at least 8 characters'
                }
              })}
            />
            {errors.password_confirmation && (
              <span className={styles.error}>{errors.password_confirmation.message}</span>
            )}
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

export default observer(SignUpForm)
