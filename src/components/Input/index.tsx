import React, { FormEvent } from 'react';
import cx from 'classnames'
import styles from './input.module.scss'
import { Input as InputReactStrap } from 'reactstrap'
import { InputType } from './constant';
interface IInputProps {
  id?: string
  className?: string
  name?: string
  value?: string | number | string[]
  type: InputType
  placeholder?: string
  checked?: boolean
  disabled?: boolean
  defaultChecked?: boolean
  prepend?: React.ReactElement | string
  innerRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement>
  onChange?: (event: unknown) => void
  onInput?: (event: FormEvent) => void
}

const Input = (props: IInputProps) => {
  const {
    className,
    name,
    value,
    type,
    placeholder,
    innerRef,
    checked,
    disabled,
    defaultChecked,
    prepend,
    onChange,
    onInput
  } = props
  return (
    <>
      <span className={styles.prepend}>{prepend}</span>
      <InputReactStrap
        disabled={disabled}
        className={cx(styles.input, className, {
          [styles.disabled]: disabled,
          [styles.hasPrepend]: prepend
        })}
        value={value}
        name={name}
        type={type}
        checked={checked}
        placeholder={placeholder}
        innerRef={innerRef}
        onChange={onChange}
        defaultChecked={defaultChecked}
        onInput={onInput}
      />
    </>
  )
}

export default Input
