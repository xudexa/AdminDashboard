import React, {useState, useEffect} from 'react'
import './styles.scss'

const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.  
  return '_' + Math.random().toString(36).substr(2, 9)
}

function InputMultiline(props) {
   const initInput = {
      id: ID(),
      label: 'label example',
      type: 'text',
      onChange: null,
      defaultValue: null,
      describe: '',
      error:'',
      required: ''
   }

   const [input, setInput] = useState(initInput)
   
   useEffect( () => { 
    setInput(props)
  }, [props])

  return (
    <div className={"wrap-textarea"+((input.required) ? " required" : '')}>
      <label className="label-textarea" htmlFor={input.id} >{input.label}</label>
      <textarea  
        type={input.type}
        className={(input.error) ? "textarea-control error multi" : "textarea-control multi"}
        id={input.id}
        aria-describedby={input.id+"Help"}
        onChange={input.onChange}
        defaultValue={(input.defaultValue) ? input.defaultValue : null }  
        required/>
      <small id={input.id+"Help"} className="form-text text-muted">{input.describe}</small>
      <small id={input.id+"Error"} className="text-error form-text">{input.error}</small>
    </div>
  )
}

export default InputMultiline