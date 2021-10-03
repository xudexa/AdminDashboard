import React, { useMemo, useState, useContext } from 'react'
// import { UpdateStateObject } from '@hooks/updateSetObject'

const AppContext = React.createContext({})

const UseAppState = () => {
  const initialState = { 
    view: {        
      openSidenav: false,
      openDropdown: false
    }      
  };

  const [state, setState] = useState(initialState)
  const actions = useMemo(() => getActions(setState), [setState])

  return { state, actions }
}

const getActions = setState => ({
  setSidenav: (e, prevState) => {
    let view = prevState.view
    view.openDropdown = false
    view.openSidenav = !prevState.view.openSidenav
    setState(state => ({ ...state, view: view }))
  },
  setDropdown: (e, prevState) => {
    let view = prevState.view
    view.openDropdown = !prevState.view.openDropdown
    view.openSidenav = false
    setState(state => ({ ...state, view: view }))
  }
})

const UseAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, UseAppState, UseAppContext }