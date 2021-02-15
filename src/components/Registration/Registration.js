import {Button} from 'react-bootstrap'
import './Registration.css'
import history from '../../History'
const register=(props)=>
(
  
<div Classname="styli+ng">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<div className="heighttop">
<h1>Registration</h1>
</div>
<div className="outer">
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
 
      <form >
      <p> I am {props.name} and {props.password}</p>
      <label ><b>Username:</b></label>
      <input type="text" name="Username" placeholder="Enter Username" name="uname" required onChange={props.createUsername} ></input>
      
      <br></br>
      <div>
      <label ><b>Password:</b></label>
      <input type="password" name="password" placeholder="Enter Password" name="psw" required  onChange={props.createPassword}></input>
      </div>
      <br></br>
      <Button variant="outline-success" onClick={()=>props.submit(),()=>history.push("/")} >Register</Button>
      </form>
      <Button variant="outline-success" onClick={()=>history.push("/")} >Back To Login</Button>
     
    </div>
    </div>
)
export default register;