import React, {useState, useEffect} from 'react'
import './styles'

function NavlistHeading(props) {
  const initState = {
    title: "Heading",
    icon: "fas fa-ban"
 }

 const [state, setState] = useState(initState)
 
 useEffect( () => { 
  setState(props)
}, [props])
  return(
    <li className="navList__heading">{state.title}<i className={state.icon}></i></li>
  )
}

export default NavlistHeading