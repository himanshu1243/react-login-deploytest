import '../Login/Login.css'
import {Button} from 'react-bootstrap'
import history from '../../History'
const password=(props)=>
(
    <div>
    <h1>Change Password</h1>
<div className="outer">
  <div >
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <label><b>Username:</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required onChange={props.createUsername} ></input>
      </div>
      <br></br>
      <div>
      <label><b>Password:</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required  onChange={props.createPassword}></input>
      </div>
      <br></br>
      <div>
      <label><b>Password:</b></label>
      <input type="password" placeholder="Confirm Password" name="psw" required></input>
      <br></br>
      <Button variant="outline-success"  onClick={()=>props.submit(),()=>history.push("/")}>Change</Button>
      </div>
      </div>
      </div>
)
export default password;