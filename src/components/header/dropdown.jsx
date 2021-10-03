import React, {useState, useEffect} from 'react'
import { UseAppContext } from '@hooks/app/index'
import Item from './item'
import './styles'
import Divider from './divider'


function Dropdown(props) {
  const list = {
    items: []
 }
 
 const { state } = UseAppContext()
 const [lstate, setState] = useState(list)
 
 useEffect( () => {
  
  if (typeof(props.items) !== 'undefined' && props.items != null) {
    setState(lstate => ({ ...lstate, items: props.items }))
  }
}, [props])

  return (    
    <div className={"dropdown"+((state.view.openDropdown) ? " dropdown--active" : '')}>
      <ul className="dropdown__list">        
        { lstate.items.map((item, ind) => {
          if (item.label === 'divider') {
            return(<Divider key={"divider"+ind}/>)
          } else {
            return(<Item icon={item.icon} label={item.label} onClick={item.onClick} key={"item"+ind} />)
          }       
        }
        )}
      </ul>
    </div>
  )
}

export default Dropdown