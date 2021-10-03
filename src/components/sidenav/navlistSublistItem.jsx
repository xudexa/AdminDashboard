import React, {useState, useEffect} from 'react'
import './styles'

function NavlistSublistItem(props) {
  const initState = {
    label: "item"
 }

 const [state, setState] = useState(initState)
 
 useEffect( () => {     
  setState(props)
}, [props])
  return(    
    <li className="subList__item">{state.label}</li>
  )
}

export default NavlistSublistItem