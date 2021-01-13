import React from 'react'
import styles from './advertisement.module.scss'

const Advertisement = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg/1200px-7_Up_-_You_like_it%2C_it_likes_you%2C_1948.jpg" alt="example" />
      </div>
    </div>
  )
}

export default Advertisement
