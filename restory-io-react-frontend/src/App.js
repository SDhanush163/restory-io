import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './components/LoginComponent'
import SignUp from './components/SignUp'
import LandingPage from './components/LandingPage'
import CreateGroup from './components/CreateGroup';
import Admin from './components/Admin';
import SearchGroup from './components/SearchGroup'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path="/" component={LoginComponent}/>
                    <Route exact path="/signUp" component={SignUp}/>
                    <Route exact path="/home" component={LandingPage}/>
                    <Route exact path="/createGroup" component={CreateGroup}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/searchGroup" component={SearchGroup}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

