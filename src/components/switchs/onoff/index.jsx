import React, {useState, useEffect} from 'react'
import './styles.scss'


function SwitchOnOff(props) {

  const initSwitch = {
    label: 'label example'
 }

 const [state, setState] = useState(initSwitch)
 
 useEffect( () => { 
   setState(props)
 }, [props])

  return(
    <label className="switchonoff">
      <input type="checkbox" />
          <span></span>
          <p>{state.label}</p>
    </label>
  )
}

export default SwitchOnOff