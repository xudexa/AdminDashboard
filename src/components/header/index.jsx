import React, {useState, useEffect} from 'react'
import { UseAppContext } from '@hooks/app/index'
import Dropdown from './dropdown'
import './styles'

function CHeader(props) {
  const list = {
    items: []
  }

  const { state, actions } = UseAppContext()
  const [lstate, setState] = useState(list)

  useEffect( () => {
    
    if (typeof(props.items) !== 'undefined' && props.items != null) {    
      setState(lstate => ({ ...lstate, items: props.items }))
    }
  }, [props])

  return (    
    <header className="header">
      <i className="fas fa-bars header__menu" onClick={event => actions.setSidenav(event, state)}></i>
      <div className="header__search">
        <input className="header__input" placeholder="Search..." />
      </div>
      
      <div className="header__icons">        
        <div className="header__notif">
          <i className="far fa-bell" data-badge="10"></i>
        </div>
        <div className={"header__user"+((state.view.openDropdown) ? " header__user--open" : "")} onClick={event => actions.setDropdown(event, state)}>
          <i className="fas fa-user fa-fw"></i>
          <Dropdown items={lstate.items} />
        </div>      
      </div>
    </header>
  )
}

export default CHeader