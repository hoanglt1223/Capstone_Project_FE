import React from 'react'
import { mockDataProject } from './mockData'
import styles from './chooseProject.module.scss'
const ChooseProjectPage = () => {
  function onChooseProject() {
    alert('You choose this project !!')
  }
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="" />
        <div>username</div>
      </div>
      <div className={styles.header}>
        <h1>CHOOSE YOUR PROJECT</h1>
      </div>
      <div className={styles.cardContainer}>
        {Array.isArray(mockDataProject) &&
          mockDataProject.map((project, index) => {
            return (
              <a href="#" key={index.toString()}>
                <div className={styles.card} onClick={onChooseProject}>
                  <img className={styles.image} src={project.image} alt="" />
                  <div>{project.name}</div>
                </div>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default ChooseProjectPage
