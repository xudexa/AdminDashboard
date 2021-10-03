import React, {useState, useEffect} from 'react'
import './styles.scss'

const GenerateID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.    
  return '_' + Math.random().toString(36).substr(2, 9)
}

function InputAppend(props) {

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
    <div className={"wrap-append"+((state.required) ? " required" : '')}>
      <div className="wrap-input-append">        
        <input 
          type={state.type} 
          className={(state.error) ? "input-control-append error" : "input-control-append"}  
          id={state.id}
          col={state.col}
          row={state.row}
          aria-describedby={state.id+"Help"} 
          onChange={state.onChange}
          placeholder={(state.placeholder) ? state.placeholder : null }             
          defaultValue={(state.defaultValue) ? state.defaultValue : null }
          required/>
          <div className="append-input">
            <span class="input-append-icon" id="email-wrapping">
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </span>
          </div>
      </div>      
      <small id={state.id+"Help"} className="append-text">{(state.error) ? "" : state.describe}</small>
      <small id={state.id+"Error"} className="text-error append-text">{state.error}</small>
    </div>
  )
}

export default InputAppend
