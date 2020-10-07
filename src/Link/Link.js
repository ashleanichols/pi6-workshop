import React from 'react';

class Link extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let nav = this.props.nav;
        let linkData = this.props.links;
        let links = linkData.map((link)=>{
            return (<li className="listItem">
                <a href="#">Going to {link} </a>
            </li>)
        })
        if(nav == "nav"){
            return(
                <ul>
                    <img className="listItem" src="white-origami-bird.png"/>
                    {links}
                </ul>
            )
        }else if(nav == "footer"){
            return(
                <ul>
                    {links}
                    <img className="listItem" src="blue-origami-bird-flipped.png"/>
                </ul>
            )
        }else{
            return(
                <ul>
                    {links}
                </ul>
            )
        }
    }

}


export default Link