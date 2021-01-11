import React from 'react'
import cx from 'classnames'
import styles from './container.module.scss'

interface IContainerProps {
  children?: React.ReactNode
}

const Container = (props: IContainerProps) => {
  const { children } = props
  return <div className={cx(styles.container)}>{children}</div>
}

export default Container
