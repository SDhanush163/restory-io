import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './components/LoginComponent'
import SignUp from './components/SignUp'
import LandingPage from './components/LandingPage'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path="/" component={LoginComponent}/>
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/home" component={LandingPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

