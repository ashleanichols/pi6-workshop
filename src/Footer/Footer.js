import React from 'react';
import Link from "../Link/Link";

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <footer className="Footer">
                <Link nav="footer" links={[1,2,3,4,5,6,7,8,9,10,11]}/>
                <p>Copyright &copy; US 2020 </p>
            </footer>
        )
    }

}


export default Footer