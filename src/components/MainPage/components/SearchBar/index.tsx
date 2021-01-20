import React from 'react'
import { useHistory } from 'react-router-dom'
import routes from '../../../../routes'
import styles from './searchBar.module.scss'

const SearchBar = () => {
  const history = useHistory()
  function logout() {
    localStorage.setItem('userToken', '')
    history.push(routes.value)
  }
  return (
    <div className={styles.container}>
      <input className={styles.inputSearch} type="text" placeholder="Enter your keyword..."></input>
      <div className={styles.containerScreen}>
        <button className={styles.buttonScreen1}>Sign Up</button>
        <button className={styles.buttonScreen1}>Sign In</button>
      </div>
      <div className={styles.containerLogout}>
        <button onClick={() => logout()} className={styles.buttonLogout}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default SearchBar
