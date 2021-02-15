import React, {Component} from 'react'
import Registration from '../Registration/Registration';
import Password from '../Password/Password';
import Login from '../Login/Login';
import {Route,Router} from 'react-router-dom'
import history from '../../History' 
import axios from 'axios';
class Loader extends Component
{
    state={
        Username:"",
        Password:"",
        loggedUsername:"",
        loggedPassword:""
    }
    createUsernameHandler=(event)=>{
      this.setState({Username:event.target.value})
    }
    createPasswordHandler=(event)=>
    {
        this.setState({Password:event.target.value})
     
    }
    enterUsernameHandler=(event)=>
    {
        this.setState({loggedUsername:event.target.value})
        // console.log(this.state)
        
    }   
    enterPasswordHandler=(event)=>
    {
        this.setState({loggedPassword:event.target.value})
        // console.log(this.state)
              
    }
    formSubmitHandle=()=>
    {
        console.log(this.state)
       const{Username,Password}=this.state;
       localStorage.setItem('Username', Username);
       localStorage.setItem('Password',Password);
    // localStorage.setItem('document',JSON.stringify(this.state));

    }
    componentDidMount() {
        // this.state.Username=localStorage.getItem('Username')
        // this.state.Password=localStorage.getItem('Password')
        // this.setState({Username:localStorage.getItem('Username'),
        //                 Password:localStorage.getItem('Password')})
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response=>{
                console.log(response)
            }
        )
}
    logHandler=()=>
    {
        
        
     if(this.state.Username)
     {
        
         
         if(this.state.Username===this.state.loggedUsername)
         {
            
                if(this.state.Password===this.state.loggedPassword)
                {
                   
                    alert("logged in")
                }
                else
                {
                    alert("invalid Password")
                }
         }
         else
         {
             alert("invalid Username")
         }
     } 
     else{
         console.log("not logged in")
     }  

    } 
  
    render()
    {
        return(
    <div>
         <Router history={history}>
    <Route path="/" exact component={Login}>
          <Login
          logged={this.logHandler}
          enterPassword={this.enterPasswordHandler}
          enterUsername={this.enterUsernameHandler}
          />
            
    </Route>
    <Route path="/passwordchange" component={Password}/>
    <Route path="/register" component={Registration} >
            <Registration 
            submit={this.formSubmitHandle}
            createUsername={this.createUsernameHandler}
            name={this.state.Username}
            createPassword={this.createPasswordHandler} 
            password={this.state.Password}/>
        </Route>
        </Router>
    </div>
        )
    }
}
export default Loader;