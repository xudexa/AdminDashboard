import React, {useState, useEffect} from 'react'
import './styles.scss'

const GenerateID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.    
  return '_' + Math.random().toString(36).substr(2, 9)
}

function InputPrepend(props) {

  const initInput = {
    id: GenerateID(),
    name: 'name',
    label: 'label example',
    icon: "fas fa-ban",
    type: 'text',
    onChange: null,
    defaultValue: null,
    describe: '',
    error:'',
    placeholder:'',    
    required: ''
 }

 const [state, setState] = useState(initInput)
 
 useEffect( () => { 
   setState(props)
 }, [props])

  return(    
    <div className={"wrap-prepend"+((state.required) ? " required" : '')}>
      <div className="wrap-input-prepend">
        <div className="prepend-input">
          <span className="input-prepend-icon" id="email-wrapping">
            <i className={state.icon} aria-hidden="true"></i>
          </span>
        </div>
        <input 
          type={state.type} 
          className={(state.error) ? "input-control-prepend error" : "input-control-prepend"}  
          id={state.id}
          aria-describedby={state.id+"Help"} 
          onChange={state.onChange}
          placeholder={(state.placeholder) ? state.placeholder : null }             
          defaultValue={(state.defaultValue) ? state.defaultValue : null }
          required/>
      </div>      
      <small id={state.id+"Help"} className="prepend-text">{(state.error) ? "" : state.describe}</small>
      <small id={state.id+"Error"} className="text-error prepend-text">{state.error}</small>
    </div>
  )
}

export default InputPrepend
