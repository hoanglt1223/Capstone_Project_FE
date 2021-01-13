import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Login from './screens/Login'
import React from 'react'
import routes from './routes'
import initializeStore from './stores/rootStore'
import SignUp from './screens/SignUp'
import ChooseProject from './screens/ChooseProject'
import Logout from './screens/Logout'
import Main from './screens/Main'

const App = () => (
  <Provider {...initializeStore()}>
    <head>
      <title>Welcome to set2020</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <BrowserRouter>
      <div>
        <Route path={routes.value} exact component={Login} />
        <Route path={routes.signUp.value} component={SignUp} />
        <Route path={routes.logout.value} component={Logout} />
        <Route path={routes.chooseProject.value} component={ChooseProject} />
        <Route path={routes.mainPage.value} component={Main} />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
