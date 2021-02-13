import React from 'react';
import './Login.css'
import {Button} from 'react-bootstrap'
import history from '../../History' 
const login=(props)=>
(
<div>
  <h1>Login</h1>
<div className="outer">
  <div >
      <label ><b>Username:</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required  onChange={props.enterUsername}></input>
      </div>
      <br></br>
      <div>
      <label ><b>Password:</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required  onChange={props.enterPassword}></input>
      </div>
      <br></br>
      <div className="rem">
      <label>remember me</label>
      
        <input type="checkbox"  name="remember"></input>
        </div>
        <br></br>
        <br></br>
        <Button variant="outline-success" onClick={props.logged} >Login</Button>
        <Button variant="outline-success" onClick={()=>history.push("/register")}>New User</Button>
        <Button variant="outline-success" onClick={()=>history.push("/passwordchange")} >Forgot Password</Button>
           </div>
           </div>
)
export default login; 