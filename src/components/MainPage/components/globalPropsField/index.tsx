import React from 'react'
import styles from './globalProps.module.scss'

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
      <div className={styles.title}>Global Properties</div>
      {Array.isArray(mockGlobalProps) &&
        mockGlobalProps.map(globalProps => {
          return (
            <div key={globalProps.name}>
              <span className={styles.propsName}>{globalProps.name}</span> : {globalProps.value}
            </div>
          )
        })}
    </div>
  )
}

export default GlobalPropsField
