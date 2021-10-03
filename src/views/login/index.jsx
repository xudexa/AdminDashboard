import React from 'react'
import InputPrepend from '@components/inputs/prepend'
import SwitchToggle from '@components/switchs/toggle'
import './styles.scss'


function Login() {
  
  return (
    <div className="modal is-open">
    <div className="modal-container">     
      <div className="modal-content">    
        <h1 className="modal-title"><i className="fas fa-users"></i></h1>
        
        <form>
          <InputPrepend 
            type="text"  
            id="email"
            name="email"
            icon="fas fa-envelope"
            placeholder="Enter your email"
            required="true"
          />
          <InputPrepend 
            type="password"  
            id="password"
            name="password"
            icon="fas fa-lock"
            placeholder="Enter your password"
            required="true"
          />
            <SwitchToggle label="Remenber me"/>
            <div className="modal-footer">
              <button className="input-button">LOGIN</button>
              <p className="sign-up">Not registered ? <a href="#">Create an account.</a></p>
            </div>
        </form>
        
      </div>
    </div>
  </div>
  )
}

export default Login