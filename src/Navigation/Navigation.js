import React from 'react';
// import "./Navigation.css";
import Link from "../Link/Link";

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <nav className="Navigation"> 
                <Link nav="nav" links={[1,2,3,4,5,6,7,8,9,10,11]}/>
            </nav>
            
        )
    }

}


export default Navigation