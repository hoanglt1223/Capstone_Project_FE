import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Login from './screens/Login'
import React from 'react'
import routes from './routes'
import initializeStore from './stores/rootStore'
import SignUp from "./screens/SignUp";
import LogOut from "./screens/Logout"
import ChooseProject from "./screens/chooseProject";

const App = () => (
  <Provider {...initializeStore()}>
    <head>
      <title>Welcome to set2020</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <BrowserRouter>
      <div>
        <Route path={routes.value} exact component={ Login } />
        <Route path={routes.login.value} component={ Login } />
        <Route path={routes.signUp.value} component={ SignUp } />
        <Route path={routes.logout.value} component={ LogOUt } />
        <Route path={routes.chooseProject.value} component={ ChooseProject } />
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
