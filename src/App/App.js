import React from 'react';
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Posts from "../Posts/Posts";
import "./App.css";
function App(props){
    return(
        <div className="App">
            <Navigation /> 
            <div className="Container">
                <Aside />
                <Main>
                    <Posts />
                </Main>
            </div>
            
            <Footer />
        </div>
    )
}

export default App;