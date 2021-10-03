import React, {useState, useEffect} from 'react'
import './styles.scss'

const GenerateID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.  
  return '_' + Math.random().toString(36).substr(2, 9)
}

function InputFloating(props) {  

  const initInput = {
     id: GenerateID(),
     label: 'label example',
     col: "50",
     row: "5",
     type: 'text',
     onChange: null,
     defaultValue: null,
     describe: '',
     error:'',
     placeholder:'',
     autocomplete:'on',
     required: ''
  }

  const [state, setState] = useState(initInput)
  
  useEffect( () => { 
    setState(props)
  }, [props])

  return (
    <div className="floating-label" >
      <input placeholder="Email" type="email" name="email" id="email" autocomplete="off" />
      <label for="email">Email:</label>
    </div>    
  )
}

export default InputFloating