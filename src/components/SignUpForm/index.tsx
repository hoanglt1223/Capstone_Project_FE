import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form, FormGroup, Label } from 'reactstrap'
import { useStore } from '../../stores/rootStore'
import Button from '../Button'
import Input from '../Input'
import styles from './signUpForm.module.scss'
import { useHistory } from 'react-router-dom'
type SignUp = {
  username: string
  password: string
  confirmPassword: string
}

const SignUpForm = () => {
  const history = useHistory()
  const { userStore } = useStore()
  const methods = useForm<SignUp>({
    defaultValues: {},
    reValidateMode: 'onChange'
  })
  const { register, handleSubmit, watch, errors } = methods
  const onSubmit = async (userData: SignUp) => {
    const formattedUser = {
      username: userData.username,
      password: userData.password
    }
    // const response = (await userStore.createUser(formattedUser)) || ''
    // if (response) {
    //   history.push('/main')
    // }
  }
  const watchPassword = watch('password')
  return (
    <section className={styles.container}>
      <FormProvider {...methods}>
        <Form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.title}>
            <h4>Sign Up</h4>
          </div>
          <FormGroup controlId="formBasicUsername">
            <Label>Username</Label>
            <Input
              name="username"
              type="text"
              placeholder="Input your username"
              innerRef={register({
                required: {
                  value: true,
                  message: 'username is required'
                },
                minLength: {
                  value: 6,
                  message: 'length should be 6 or more'
                },
                pattern: {
                  value: /[A-Za-z0-9]+/,
                  message: 'invalid username'
                }
              })}
            />
            {errors.username && <span className={styles.error}>{errors.username.message}</span>}
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
                  value: 6,
                  message: 'password should contain at least 6 characters'
                }
              })}
            />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Label>Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="confirm your Password"
              innerRef={register({
                required: {
                  value: true,
                  message: 'confirm password is required'
                },
                minLength: {
                  value: 6,
                  message: 'confirm password should contain at least 6 characters'
                },
                validate: {
                  confirmPassword: value => value === watchPassword || 'Your password and confirm password do not match'
                }
              })}
            />
            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
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
