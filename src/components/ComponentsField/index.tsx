import cx from 'classnames'
import React, { Children, useState } from 'react'
import styles from './componentsField.module.scss'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap'

interface IComponentsFieldProps {
  hihi?: string
}
const ComponentsField = (props: IComponentsFieldProps) => {
  const [activeTab, setActiveTab] = useState('1')
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab)
  }
  return (
    <div className={styles.tab}>
      <Nav tabs fill>
        <NavItem>
          <NavLink
            className={cx({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1')
            }}
          >
            Custom
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={cx({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2')
            }}
          >
            Library
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className={styles.tabContent}>
            <Col>
              <Button outline color="info">
                {'Input'}
              </Button>
            </Col>
            <Col>
              <Button outline color="info">
                {'Form'}
              </Button>
            </Col>
            <Col>
              <Button outline color="info">
                {'Button'}
              </Button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md="12">
              <Button outline color="info">
                {'Component 1'}
              </Button>
            </Col>
            <Col md="12">
              <Button outline color="info">
                {'Component 2'}
              </Button>
            </Col>
            <Col md="12">
              <Button outline color="info">
                {'Component 3'}
              </Button>
            </Col>
            <Col md="12">
              <Button outline color="info">
                {'Component 4'}
              </Button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default ComponentsField
