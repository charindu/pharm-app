import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./component/Header";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import Content from "./component/Content";
import UserRegister from "./component/content/UserRegister";
import UserList from "./component/content/UserList";
import Configurations from "./component/content/Configurations";

function App () {
    return(

        <div>
            <Header/>
            <Menu/>
            <Router>
                <Switch>
                    <Route path='/userreg' exact={true} component={UserRegister}/>
                    <Route path='/userlist' exact={true} component={UserList}/>
                    <Route path='/dashboard' exact={true} component={Content}/>
                    <Route path='/configurations' exact={true} component={Configurations}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
