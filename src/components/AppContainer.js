import React, { useState } from 'react'
import LoginScreen from './LoginScreen'
import Dashboard from './Dashboard'
import Header from './Header'
import './styles.css'

export default function AppContainer() {
  const [state, setState] = useState({
    loggedIn: false
  })

  const loginSubmitHandler = () => {
    setState({ loggedIn: !state.loggedIn })
  }

  return (
    <div id='AppContainer'>
      <Header />
      {state.loggedIn ? <Dashboard /> : <LoginScreen onSubmit={loginSubmitHandler} />}
    </div>
  )
}
