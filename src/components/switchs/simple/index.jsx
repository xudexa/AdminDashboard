import React, {useState, useEffect} from 'react'
import './styles.scss'


function SwitchSimple(props) {

  const initSwitch = {
    label: 'label example'
 }

 const [state, setState] = useState(initSwitch)
 
 useEffect( () => { 
   setState(props)
 }, [props])

  return(
    <label className="switch">
      <input type="checkbox" />
      <div>
          <span></span>
          <p>{state.label}</p>
      </div>
    </label>
  )
}

export default SwitchSimple