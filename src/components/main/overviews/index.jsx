import React, {useState, useEffect} from 'react'
import './styles.scss'
import COverviewCard from './card'

function COverview(props) {

  const initState = {    
    overviewCards: []       
  }

  const [state, setState] = useState(initState)

  useEffect( () => {    
    if (typeof(props.overviewCards) !== 'undefined' && props.overviewCards != null) {
      setState(state => ({ ...state, overviewCards: props.overviewCards }))
    }  
  }, [props])

  return(
    <div className="overview">
      { state.overviewCards.map((card, ind) => {
        return(<COverviewCard card={card} key={"card"+ind}/>)
      })}
    </div>
  )
}

export default COverview

