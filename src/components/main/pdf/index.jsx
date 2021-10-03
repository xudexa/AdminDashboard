import React, {useState, useEffect} from 'react'
import './styles.scss'


function CPDF(props) {

  const initState = {
    url: '/'
 }

 const [state, setState] = useState(initState)
 
 useEffect( () => { 
   setState(props)
 }, [props])

  return(    
    <div className="wrap-pdf">
      <object width="100%" height="650px" data={state.url} type="application/pdf">   </object>
    </div>
  )
}

export default CPDF
