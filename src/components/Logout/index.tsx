import React from 'react'
import styles from './logout.Form.module.scss'
import Button from '../Button'
function LogOutPage() {
  return (
    <div className={styles.Main}>
      <div className={styles.container}>
        <h1 className={styles.titleEnd}>Thank you for using our services</h1>
        <div className={styles.buttonContainer}>
          <Button className={styles.left}>login again</Button>
          <Button className={styles.right}>Back home page</Button>
        </div>
        <button className={styles.close}>X</button>
      </div>
    </div>
  )
}
export default LogOutPage
