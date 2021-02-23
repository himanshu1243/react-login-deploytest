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
        loggedPassword:"",
        logg:[]
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
    formSubmitHandle=(name)=>
    {
    //     console.log(this.state)
    //    const{Username,Password}=this.state;
    //    localStorage.setItem('Username',Username);
    //    localStorage.setItem('Password',Password);
    // // localStorage.setItem('document',JSON.stringify(this.state));
        //  this.setState({Username:name})
         
    }
    componentDidMount() {
        // this.state.Username=localStorage.getItem('Username')
        // this.state.Password=localStorage.getItem('Password')
        this.setState({Username:localStorage.getItem('Username'),
                        Password:localStorage.getItem('Password')})
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response=>{
                this.setState({Username:response.data.slice(0, 1)[0].username})
                this.setState({Password:response.data.slice(0, 1)[0].email}) 
                console.log(this.state.Password)
                console.log(response.data)
      
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
                const name={this.state.logg.map(post=>
                <li>
                    {post.name}
                </li>
                
                )}
            submit={this.formSubmitHandle(this.name)}
            createUsername={this.createUsernameHandler}
            createPassword={this.createPasswordHandler} 
            password={this.state.Password}
            // name={this.state.Username}/>
            />
        </Route>
        </Router>
    </div>
        )
    }
}
export default Loader;