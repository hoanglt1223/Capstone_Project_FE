import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getAccessToken } from '../../API'
import routes from '../../routes'
import ComponentsField from '../ComponentsField'
import SignUpForm from '../SignUpForm'
import Advertisement from './components/Advertisement'
import CssProps from './components/CssProps'
import GlobalProps from './components/GlobalProps'
import PublishGroup from './components/PublishGroup'
import SearchBar from './components/SearchBar'
import ToolsBar from './components/ToolBars'
import styles from './mainPage.module.scss'
const MainPage = () => {
  const history = useHistory()
  const token = getAccessToken() || ''
  useEffect(() => {
    if (!token) {
      history.push(routes.value)
    }
  }, [token])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ToolsBar></ToolsBar>
      </div>
      <div className={styles.navbar}>
        <SearchBar></SearchBar>
      </div>
      <div className={styles.componentCssProps} id="ComponentCssProps">
        <CssProps />
      </div>
      <div className={styles.globalProps} id="GlobalProps">
        <GlobalProps />
      </div>
      <div className={styles.adsContainer} id="AdsContainer"></div>
      <div className={styles.publishGroup} id="PublishGroup"></div>
      <div className={styles.playGround} id="PlayGround">
        <SignUpForm />
      </div>
      <div className={styles.adsContainer} id="AdsContainer">
        <Advertisement />
      </div>
      <div className={styles.publishGroup} id="PublishGroup">
        <PublishGroup />
      </div>
      <div className={styles.playGround} id="PlayGround"></div>
      <div className={styles.sourceTree} id="SourceTree">
        <img src="sourcetree.png" />
      </div>
      <div className={styles.library} id="Library">
        <ComponentsField />
      </div>
    </div>
  )
}

export default observer(MainPage)
