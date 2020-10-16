import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import "./App.css";

import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import User from "../User/User";
import FourOFour from '../404/404';
import Input from '../Input/Input';
import Register from '../Forms/Register';
import Login from '../Forms/Login';
import {authenticationService} from '../context/userData.js';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loggedIn:false
        }
        //this.handleStateUpdate = this.handleStateUpdate.bind(this);
    }
    // const context =useContext(LoggedInContext);

   //const [loggedIn,setLoggedIn]= useState(document.cookie.indexOf("x-auth-token") !== -1);
//    useEffect(()=>{
//        console.log("used effect!");
//    })
    // handleStateUpdate(){
    //     console.log("Updared App State")
    //     this.setState({
    //         loggedIn:document.cookie.indexOf("x-auth-token") !== -1
    //       });
    //       console.log(this.state.loggedIn);
    // }
    componentDidMount() {
        authenticationService.loggedIn.subscribe(x => this.setState({ loggedIn: x }));
    }

/* <Route exact path="/" render={() => (
    loggedIn ? (<Redirect to="/dashboard" />)
    : (<PublicHomePage />)
   */

    render(){
        return(
            <div className="App" >
                
                    <Router onChange={()=>{
                        console.log("Routing...")
                    }}>
                        <Navigation loggedIn={this.state.loggedIn} appState={this.handleStateUpdate} /> 
                        <div className="Container">
                            <Aside loggedIn={this.state.loggedIn} />
                            <Switch >
                                <Route path="/" exact component={Main}  />
                                <Route path="/post" component={Input}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/profile" component={User}/>
                                <Route component={FourOFour}/>
                            </Switch>
                        </div>
                        <Footer loggedIn={this.state.loggedIn}  />
                    </Router>
                
            </div>
        )
    }
}

export default App;