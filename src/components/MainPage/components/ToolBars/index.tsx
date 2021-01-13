import React, { Component } from 'react'
import styles from './toolBar.module.scss'
import Button from '../../../Button'
const ToolsBar = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} type="submit">
        New
      </button>
      <button className={styles.button} type="submit">
        Copy
      </button>
      <button className={styles.button} type="submit">
        Cut
      </button>
      <button className={styles.button} type="submit">
        Delete
      </button>
      <button className={styles.button} type="submit">
        Save
      </button>
      <button className={styles.button} type="submit">
        Paste
      </button>
      <button className={styles.buttonExport} type="submit">
        Export
      </button>
      <h2 className={styles.text}>KIXBUILDER</h2>
    </div>
  )
}
export default ToolsBar
