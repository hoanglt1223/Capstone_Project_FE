import React, { Component } from 'react'
import styles from './toolBar.module.scss'
import Button from '../../../Button'
const ToolsBar = () => {
  return (
    <div className={styles.container}>
      <Button className={styles.button} type="submit">
        New
      </Button>
      <Button className={styles.button} type="submit">
        Copy
      </Button>
      <Button className={styles.button} type="submit">
        Cut
      </Button>
      <Button className={styles.button} type="submit">
        Delete
      </Button>
      <Button className={styles.button} type="submit">
        Save
      </Button>
      <Button className={styles.button} type="submit">
        Paste
      </Button>
      <Button className={styles.buttonExport} type="submit">
        Export
      </Button>
      <h1 className={styles.text}>KIXBUILDER</h1>
    </div>
  )
}
export default ToolsBar
