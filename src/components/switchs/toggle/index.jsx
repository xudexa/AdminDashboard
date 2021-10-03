import React, {useState, useEffect} from 'react'
import './styles.scss'


function SwitchToggle(props) {

  const initSwitch = {
    label: 'label example'
 }

 const [state, setState] = useState(initSwitch)
 
 useEffect( () => { 
   setState(props)
 }, [props])
  return(    
      <label className="toggle-control">
        <input type="checkbox" />
        <span className="control"></span>
        <p>{state.label}</p>
      </label>
  )
}

export default SwitchToggle