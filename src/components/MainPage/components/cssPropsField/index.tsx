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
      {Array.isArray(mockCSSProps) &&
        mockCSSProps.map(cssProps => {
          return (
            <div key={cssProps.name}>
              {cssProps.name} : {cssProps.value}
            </div>
          )
        })}
    </div>
  )
}

export default CssPropsField
