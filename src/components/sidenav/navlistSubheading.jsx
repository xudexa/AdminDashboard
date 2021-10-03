import React, {useState, useEffect} from 'react'
import NavlistSublist from './navlistSublist'
import './styles'

function NavlistSubheading(props) {
  const initState = {
    subHeading: {
      title: "SubHeading",
      icon: "fas fa-ban",
      items: []
    }
 }

 const [state, setState] = useState(initState)

 const [openSublist, setOpen] = useState(false);
 
 useEffect( () => {  
  if (typeof(props.subHeading) !== 'undefined' && props.subHeading != null) {
    setState(props)
  }
}, [props])

  return(
    <li>
      <div className={"flex-m navList__subheading "+((openSublist) ? "navList__subheading--open" : "")} onClick={() => setOpen(!openSublist)} >
        <span className="navList__subheading-icon"><i className={state.subHeading.icon}></i></span>
        <span className="navList__subheading-title">{state.subHeading.title}</span>
      </div>      
      <NavlistSublist items={state.subHeading.items} className={((openSublist) ? "subList" : "subList subList--hidden")}/>
    </li>
  )
}

export default NavlistSubheading