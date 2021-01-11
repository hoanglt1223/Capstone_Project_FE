import React from 'react'
import { Button as ReactStrapButton } from 'reactstrap'
import cx from 'classnames'
import PulseLoader from 'react-spinners/PulseLoader'
import styles from './button.module.scss'
import Icon from '../Icon'

interface IButtonProps {
  style?: string
  children?: React.ReactChildren | React.ReactNode
  type?: 'submit' | 'reset' | 'button'
  iconName?: string
  onClick?: () => void
  spaceLeft?: boolean
  isLoading?: boolean
  disabled?: boolean
  outline?: boolean
  color?: string
  className?: string
  variant?: string
}
const Button = (props: IButtonProps) => {
  const { style, children, iconName, onClick, spaceLeft, isLoading, disabled, ...rest } = props
  let content:React.ReactChildren | React.ReactNode
  if (isLoading) {
    content = <PulseLoader size={10} margin={0} color="#FFFFFF" />
  } else {
    content = (
      <>
        {iconName && <Icon onLeftButton iconName={iconName} />} {children}
      </>
    )
  }
  return (
    <ReactStrapButton
      {...rest}
      className={cx({
        [styles.button]: true,
        [styles.spaceLeft]: spaceLeft,
        [styles.hasIcon]: iconName,
        [styles.disabled]: disabled
      })}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {content}
    </ReactStrapButton>
  )
}

export default Button
