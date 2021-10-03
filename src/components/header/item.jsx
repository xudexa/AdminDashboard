import React, {useState, useEffect} from 'react'
import './styles'

function Item(props) {
  const initState = {
    icon: 'fas fa-ban',
    label: 'item',
    onClick: null
 }

 const [state, setState] = useState(initState)
 
 useEffect( () => {  
  setState(props)
}, [props])

  return (
    <li className="dropdown__list-item" onClick={state.onClick}>
      <span className="dropdown__icon"><i className={state.icon}></i></span>
      <span className="dropdown__title">{state.label}</span>
    </li>    
  )
}

export default Item