import React, {useState, useEffect} from 'react'
import './styles.scss'

function COverviewCard(props) {

  const initState = {
    icon: 'fas fa-ban',
    bgColor: '#FF2020',
    title: 'Card',
    subtitle: 'Subtitle',
    onClick: null
  }

  const [state, setState] = useState(initState)
 
  useEffect( () => {  
    setState(props.card)
  }, [props])

    
  return(
    <div className="overviewCard" onClick={state.onClick}>
      <div className={"overviewCard-icon overviewCard-icon--"+state.bgColor}>
        <i className={state.icon}></i>
      </div>
      <div className="overviewCard-description">
        <h3 className="overviewCard-title text-light">{state.title}</h3>
        <p className="overviewCard-subtitle">{state.subtitle}</p>
      </div>
    </div>
  )
}

export default COverviewCard