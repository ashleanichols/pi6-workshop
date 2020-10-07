import React from 'react';
import Post from "../Post/Post";


class Posts extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className = "Posts"> 
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }

}


export default Posts