import React, {useState, useEffect} from 'react'
import { UseAppContext } from '@hooks/app/index'
import './styles'


function Company(props) {
  
  const { state, actions } = UseAppContext();
  
  const initState = {
    company: {
      name: "Company Name",
      url: "#"
    }
 } 
 const [lstate, setState] = useState(initState) 
 useEffect( () => {   
  if (typeof(props.company) !== 'undefined' && props.company != null) {    
    setState(props)
  }
}, [props])

return(
  <div className="sidenav__company">
    <i className="fas fa-feather-alt sidenav__company-icon"></i>
    <a className="sidenav__company-link" href={lstate.company.url}>{lstate.company.name}</a>
    <i className="fas fa-times sidenav__company-close" onClick={event => actions.setSidenav(event, state)} ></i>
  </div>
)
}

export default Company
