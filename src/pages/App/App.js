import React, { Component } from 'react';
import {
    Switch,
    Route,
    // Redirect,
} from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage'
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
    constructor() {
        super();
        this.state ={
            user: null
        }
    };
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/about' component={AboutPage} />
                </Switch>
            </div>
        );
    }
}

export default App;