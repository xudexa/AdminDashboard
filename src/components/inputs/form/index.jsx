import React, {useState, useEffect} from 'react'
import './styles.scss'

const GenerateID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.    
  return '_' + Math.random().toString(36).substr(2, 9)
}

function InputForm(props) {

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
    <div className={"wrap-input"+((state.required) ? " required" : '')}>
      <label className="label-input" htmlFor={state.id} >{state.label}</label>
      <input 
        type={state.type} 
        className={(state.error) ? "input-control error" : "input-control"}  
        id={state.id}
        col={state.col}
        row={state.row}
        aria-describedby={state.id+"Help"} 
        onChange={state.onChange}
        placeholder={(state.placeholder) ? state.placeholder : null }             
        defaultValue={(state.defaultValue) ? state.defaultValue : null }
        required/>      
      <small id={state.id+"Help"} className="form-text">{(state.error) ? "" : state.describe}</small>
      <small id={state.id+"Error"} className="text-error form-text">{state.error}</small>
    </div>
  )
}

export default InputForm
