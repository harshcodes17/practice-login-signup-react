import React from 'react'
// import './LoginSignUp.css'
import './LoginSignup.css'
import user_icon from '../assets/login.png'
import email_icon from '../assets/envelope.png'
import password_icon from '../assets/lock.png'
//import submit_icon from '../assets/security.png'
const LoginSignup = () => {
  return (
    < div className = 'container'>
    <div className = "header">
    <div className="text"> Sign up </div>
            <div className="underline"></div>
</div>
    <div className = "inputs">
    <div className ="input"></div>
    <img src= {user_icon }alt=""/>
    <input type ="text" placeholder='Name'/>
    </div>

    <div className = "inputs">
    <div className ="input"></div>
    <img src={email_icon}alt=""/>
    <input type ="email" placeholder='Email Id'/>
    </div>

    <div className = "inputs">
    <div className ="input"></div>
    <img src={password_icon}alt=""/>
    <input type ="password" placeholder='Password' />
    </div>
    <div className = "fogot password">Lost password? <span>Click here!</span>
   <div className ="submit-container"></div>
   <div className ="submit"> SignUp</div>
   <div className ="submit"> Login</div>
   
   </div>
   </div>
  )
}

export default LoginSignup
