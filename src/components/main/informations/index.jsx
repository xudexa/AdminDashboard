import React, {useState, useEffect} from 'react'
import './styles.scss'
import * as moment from 'moment'


function CMainInformations(props) {

  const [state, setState] = useState(moment().format('HH:mm:ss'))

  useEffect( () => {
    var timerID = setInterval( () => tick(), 1000 )

    return function cleanup() {
        clearInterval(timerID)
      }
  })

  function tick() {
    setState(moment().format('HH:mm:ss'));
  }

  return(
    <div className="main-informations">
      <div className="main-informations__intro-wrapper">
        <div className="main-informations__datetime">
          <div className="main-informations__datetime-date "><strong>{moment().format('DD MMMM YYYY')}</strong></div>
          <div className="main-informations__datetime-time ">{state}</div>
        </div>
        <div className="quickview">
          <div className="quickview__item">
            <div className="quickview__item-total">41</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light"> Events</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">64</div>
            <div className="quickview__item-description">
              <i className="far fa-comment"></i>
              <span className="text-light"> Messages</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">17&deg;</div>
            <div className="quickview__item-description">
              <i className="fas fa-map-marker-alt"></i>
              <span className="text-light"> Antwerpen</span>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}


export default CMainInformations
