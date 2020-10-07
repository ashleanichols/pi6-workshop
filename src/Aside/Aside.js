import React from 'react';
import Link from "../Link/Link";

class Aside extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <aside className="Aside">
                <Link links={[1,2,3,4,5,6,7,8,9,10,11]}/>
            </aside>
        )
    }

}


export default Aside