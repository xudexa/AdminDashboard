import React from 'react'
import './styles.scss'


function Item() {
  return(
    <div className="quickview__item">
      <div className="quickview__item-total">41</div>
      <div claclassNamess="quickview__item-description">
        <i className="far fa-calendar-alt"></i>
        <span className="text-light">Events</span>
      </div>
    </div>
  )
}

export default Item