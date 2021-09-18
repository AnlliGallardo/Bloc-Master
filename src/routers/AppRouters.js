import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



import Navbar from '../Navbar';
import Perfil from '../Perfil';
// import Search from '../component/Search';
import Registro from '../component/Registro';
import Login from '../component/Login';
// import Tiket from '../component/Tiket';
import About from '../component/About';



export default class AppRouter extends Component {
    render() {
        return(
            <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/registro" component={Registro}/>
                        {/* <Route exact path="/tk" component={Tiket}/> */}
                        <Route exact path="/about" component={About}/>
                        
                    </Switch>
                    
            </Router>
        )
    }
}