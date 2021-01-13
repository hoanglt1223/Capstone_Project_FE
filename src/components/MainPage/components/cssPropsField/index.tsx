import React from 'react'
import styles from './cssProps.module.scss'

const mockCSSProps = [
  {
    name: 'margin',
    value: '15px'
  },
  {
    name: 'padding',
    value: '20px'
  },
  {
    name: 'Width',
    value: '30px'
  }
]
const CssPropsField = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CSS Properties</div>
      {Array.isArray(mockCSSProps) &&
        mockCSSProps.map(cssProps => {
          return (
            <div key={cssProps.name}>
              <span className={styles.propsName}>{cssProps.name}</span> : {cssProps.value}
            </div>
          )
        })}
    </div>
  )
}

export default CssPropsField
