import React from 'react'
import Button from '../../../Button'
import styles from './publishGroup.module.scss'

const PublishGroup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button>Share</Button>
        <Button>export</Button>
      </div>
    </div>
  )
}

export default PublishGroup
