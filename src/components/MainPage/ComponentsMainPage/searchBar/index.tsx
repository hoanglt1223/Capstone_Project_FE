import React from 'react'
import styles from './searchBar.module.scss'
import Input from '../../../Input'

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <Input className={styles.inputSearch} type="text" placeholder="Enter what you want to search"></Input>
    </div>
  )
}

export default SearchBar
