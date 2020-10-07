import React from 'react';

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(<div className = "Main">
                <h1>Posts here</h1>
               {this.props.children}
            </div>
        )
    }

}


export default Main