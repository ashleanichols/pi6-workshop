import React from 'react';

import './Forms.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            rePassword:""
        }
        this.handleInputChange= this.handleInputChange.bind(this);
    }
    handleInputChange(event) { 
        let statePropName =  event.target.name;
        let newStateVal = event.target.value;
        this.setState({ 
            [statePropName]: newStateVal
         });
        console.log(this.state);
    }

    login(){
       // fetch();//<--definetly happening
    }
    render(){

        return(
            <div className="Login">
                <h1>Login Page</h1>
                <form>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" name="password" id="password" onChange={this.handleInputChange}/>
                    </div>
                   
                    <div className="form-control">
                        <button type="submit" onClick={()=>{this.login()}}>Login</button>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default Login;