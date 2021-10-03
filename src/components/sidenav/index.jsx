import React, {useState, useEffect} from 'react'
import { UseAppContext } from '@hooks/app/index'
import './styles'
import Company from './company'
import Profil from './profil'
import Navlist from './navlist'


function CSidenav(props) {
  
  const { state } = UseAppContext();

  const initState = {    
    sideNav: {      
      user: {
        email: '',
        firstname: '',
        lastname:'',
        avatar:'',
        company: {
          name: '',
          url:''
        }
      },
      navList: []
    }    
 }
const [lstate, setState] = useState(initState)

 useEffect( () => {
  if (typeof(props.sideNav) !== 'undefined' && props.sideNav != null) {
    setState(props)
  }  
}, [props])
  return(
    <aside className={((state.view.openSidenav) ? "sidenav sidenav--active" : "sidenav")}>
      <Company brand={lstate.sideNav.user.company} />
      <Profil profil={lstate.sideNav.user} />
      <div className="flex-c-m">               
        <Navlist navList={lstate.sideNav.navList} />
      </div>
  </aside>
  )
}


export default CSidenav