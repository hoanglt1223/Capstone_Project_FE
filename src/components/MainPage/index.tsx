import styles from './mainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.container} id="Container">
      <div className={styles.header} id="Header"></div>
      <div className={styles.navbar} id="Navbar"></div>
      <div className={styles.componentCssProps} id="ComponentCssProps"></div>
      <div className={styles.globalProps} id="GlobalProps"></div>
      <div className={styles.adsContainer} id="AdsContainer"></div>
      <div className={styles.publishGroup} id="PublishGroup"></div>
      <div className={styles.playGround} id="PlayGround"></div>
      <div className={styles.sourceTree} id="SourceTree"></div>
      <div className={styles.library} id="Library"></div>
    </div>
  )
}

export default MainPage
