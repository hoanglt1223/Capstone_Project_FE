import React from 'react'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.inputSearch} type="text" placeholder="Enter your keyword..."></input>
      <div className={styles.containerScreen}>
        <button className={styles.buttonScreen1}>Sign Up</button>
        <button className={styles.buttonScreen1}>Sign In</button>
      </div>
    </div>
  )
}

export default SearchBar
