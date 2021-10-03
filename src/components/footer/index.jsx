import React from 'react'
import './styles.scss'

function CFooter() {
  return(
    <footer className="footer">
      <p><span className="footer__copyright">&copy;</span> 2020 InstHacktif</p>
      <p>Crafted with <i className="fas fa-heart footer__icon"></i> by <a href="/#" target="_blank" className="footer__signature">InstHacktif</a></p>
    </footer>    
  )
}

export default CFooter