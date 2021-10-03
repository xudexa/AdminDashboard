import React, {useState, useEffect} from 'react'
import './styles.scss'

function SelectForm(props) {
   
  const initSelect = {
      id: 'example',
      label: 'label example',
      type: 'text',
      onChange: null,
      defaultValue: null,
      describe: '',
      error:'',
      datas:[],
      placeholder:'',
      required: ''
   }

   const [state, setState] = useState(initSelect)   

   useEffect( () => {
    setState(props)
  }, [props])  

  return (
    <div className={"wrap-select"+((state.required) ? " required" : '')}>    
      <label className="label-select" htmlFor={state.id} >{state.label}</label>
      <select 
        type={state.type} 
        className={(state.error) ? "select-control error" : "select-control"}  
        id={state.id} 
        aria-describedby={state.id+"Help"} 
        onChange={state.onChange}                
        defaultValue={(state.defaultValue) ? state.defaultValue : null }    
        placeholder={(state.placeholder) ? state.placeholder : null }
        required >
        <option value='' key=''></option>
        {          
          state.datas.map(elem => (
            <option value={elem.value} key={elem.id}>{elem.display}</option>
          ))
        }
      
      </select>
      <small id={state.id+"Help"} className="form-text text-muted">{state.describe}</small>
      <small id={state.id+"Error"} className="text-error form-text">{state.error}</small>
    </div>
  )
}

export default SelectForm