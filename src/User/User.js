import React from 'react';
import "./User.css";

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{}
        }
    }
    updateUser(){

    }
    render(){

        return(<div className = "Pofile">
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
                   
                </div>
                <div>
                    <h3>Last 3 posts to your wall</h3>
                    {this.props.children}
                </div>
                    
            </div>
        )
    }

}


export default User;