export interface IUser {
  email?: string
  name?: string
  password?: string
  passwordConfirm?: string
  isInvite?: boolean
}

// eslint-disable-next-line no-shadow
export enum ErrorMessage {
  ACCOUNT_DISABLED = 'the-account-is-disabled',
  ACCOUNT_DISABLED_PLEASE_CONTACT_ADMIN = 'the-account-is-disabled-please-contact-admin'
}
