import React, {useState, useEffect} from 'react'
import NavlistHeading from './navlistHeading'
import NavlistSubheading from './navlistSubheading'
import './styles'

function Navlist(props) {  
  
  const initState = {
    navList: []
 }

 const [state, setstate] = useState(initState)
 
 useEffect( () => {  
  if (typeof(props.navList) !== 'undefined' && props.navList != null) {
    setstate(props)
  }
}, [props])
  return(
    <ul className="navList">
    { state.navList.map((nav, ind) =>
        <div key={"div"+ind}>
          <NavlistHeading title={nav.heading.title} icon={nav.heading.icon} key={"heading"+ind} />
          { nav.subHeadingList.map((subHeading, subInd) =>
            <NavlistSubheading subHeading={subHeading} key={"subHeading"+subInd}/> 
          )}
        </div>
    )}     
    </ul>
  )
}

export default Navlist