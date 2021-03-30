import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./component/Header";
import Menu from "./component/Menu";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App () {
    return(
        <div>
            <Header/>
            <Menu/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
