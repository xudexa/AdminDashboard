import React, {useState, useEffect} from 'react'
import './styles.scss'

const GenerateID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.    
  return '_' + Math.random().toString(36).substr(2, 9)
}

function InputInLine(props) {
  const initInput = {
    id: GenerateID(),
    name: 'name',
    label: 'label example',
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
    <div className={((state.required==="true") ? "wrap-input-inline validate-input": "wrap-input-inline")} data-validate = {state.error}>
      <span className="label-input-inline">{state.label}</span>
      <input 
        id={state.id}
        className="input-inline" 
        type={state.type}
        defaultValue={state.defaultValue}
        name={state.name}
        placeholder={state.placeholder} 
        onChange={state.onChange}
      />
      <span className="focus-input-inline"></span>
      { (state.describe) ? <span><small id={state.id+"Help"} className="form-text">{state.describe}</small></span> : null }      
    </div>
  )
}

export default InputInLine
