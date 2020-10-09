import React from 'react';

import './Forms.css';


class Register extends React.Component{
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

    register(){
       // fetch();//<--definetly happening
    }
    render(){

        return(
            <div className="Register">
                <h1>Register Page</h1>
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
                        <label>Password</label>
                        <input type="password" name="rePassword" id="rePassword" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-control">
                        <button type="submit" onClick={()=>{this.register()}}>Register</button>
                    </div>
                    
                </form>
            </div>

        )
    }
}

export default Register;
