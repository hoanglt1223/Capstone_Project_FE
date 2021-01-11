import cx from 'classnames'
import styles from './icon.module.scss'
import React from 'react';
interface IIconProps {
  iconName?: string
  alt?: string
  style?: string
  id?: string
  onLeftButton?: boolean
  onClick?: () => void
}

const Icon = (props: IIconProps) => {
  const { iconName, alt = 'icon', id, onLeftButton, onClick, style } = props
  return (
    <img
      onClick={onClick}
      id={id}
      className={cx(styles.icon, style, {
        [styles.onLeftButton]: onLeftButton
      })}
      src={`/assets/icons/${iconName}`}
      alt={alt}
    />
  )
}

export default Icon
