import React from 'react';
import "./Input.css";

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input:""
        }
    }
    updateInput(){

    }
    render(){

        return(<div className = "Input">
                <div>
                    <h1>Share your thoughts... </h1>
                    <textarea></textarea>
                    <button onClick={()=>{this.updateInput()}}>Post</button>
                </div>
                <div>
                    <h3>Last 3 posts to your wall</h3>
                    {this.props.children}
                </div>
                    
            </div>
        )
    }

}


export default Input