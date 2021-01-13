import React from 'react'
import styles from './cssProps.module.scss'

const mockGlobalProps = [
  {
    name: 'isActive',
    value: 'true'
  },
  {
    name: 'editMode',
    value: 'false'
  }
]
const GlobalPropsField = () => {
  return (
    <div className={styles.container}>
      {Array.isArray(mockGlobalProps) &&
        mockGlobalProps.map(globalProps => {
          return (
            <div key={globalProps.name}>
              {globalProps.name} : {globalProps.value}
            </div>
          )
        })}
    </div>
  )
}

export default GlobalPropsField
