import React from 'react';
import { withRouter } from 'react-router-dom';
import "./User.css";
import Posts from "../Posts/Posts";

import {getData} from "../services/getPosts";
import {logoutUser} from "../services/logoutUser";
class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{}
        }
        this.buttonHandler= this.buttonHandler.bind(this);
    }
    componentDidMount() {
        getData().then((data) => {
          this.setState({ data });
        });

      }

    // add logout button w/ appropriate method calls and a redirect to home page
    buttonHandler(event){
        event.preventDefault();
        logoutUser().then(res=>{
            console.log("are we changing pages?")
            
            console.log(document.cookie.indexOf("x-auth-token") === -1);
            console.log(res);
            if(res || document.cookie.indexOf("x-auth-token") === -1){
               
                this.props.history.push("/");
            }
        })
    }
    render(){

        return(<div className = "Profile">
                <img src="https://via.placeholder.com/150x150.jpg" alt="profile-picture" />
                <div className="personal-info">
                    <p>
                        <span>Email:</span>
                        myemail@email.com
                    </p>
                    <p>
                        <span>Posts:</span>
                        9
                    </p>
                    <button onClick={this.buttonHandler} >Logout</button>
                </div>
                <div>
                    <h3>Last 3 posts to your wall</h3>
                    <Posts data={this.state.data} />
                </div>
                    
            </div>
        )
    }

}


export default withRouter(User);