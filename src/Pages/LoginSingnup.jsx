import React from 'react'
import './CSS/LoginSingnup.css'

export const LoginSingnup = () => {
  return (
    <div className="loginsingnup">
      <div className="L-container">
        <h1>Sign Up</h1>
        <div className="L-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have a account? <span>Login hear</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
        </p>
      </div>
    </div>
  )
}

export default LoginSingnup