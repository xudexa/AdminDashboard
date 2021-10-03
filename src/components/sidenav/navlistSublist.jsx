import React, {useState, useEffect} from 'react'
import NavlistSublistItem from './navlistSublistItem'
import './styles'

function NavlistSublist(props) {
  const initState = {
    className: "subList subList--hidden",
    items: []
 }

 const [state, setState] = useState(initState)
 
 useEffect( () => { 
  if (typeof(props.items) !== 'undefined' && props.items != null) {    
    setState(props)
  }
}, [props])
  return(
    <ul className={state.className}>
      { state.items.map((item, ind) => 
          <NavlistSublistItem label={item} key={"subList"+ind}/>
        )
      }
    </ul>
  )
}

export default NavlistSublist