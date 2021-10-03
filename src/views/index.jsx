import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AppContext, UseAppState } from '@hooks/app/index'
import './styles.scss'
import Header from './header'
import Sidenav from './sidenav'
import MainInformations from './mainInformations'
import Footer from './footer'
import Dashboard from './content/dashboard'
// import CModal from '@components/modal'
import Login from './login'



function View() {
  const { state, actions } = UseAppState()

  return(
    <Router>
      <AppContext.Provider value={{ state, actions }}>
        <div className={((state.view.openDropdown) ? "grid grid--noscroll" : "grid")}>
          {
            //<Login />
          }
          <Header />      
          <Sidenav />
          <main className="main">
            <MainInformations />            
            
            <Switch>
              <Route path="/" exact component={Dashboard} />                  
            </Switch>
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  )
}

export default View