import React, { Component } from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            [<Header loggedIn={false} />,
            <div className="App-bg">
                <h1 className="main-title">Welcome.</h1>
                <NavLink exact to="/tuteeprofile" className="welcome-subtitle">Take me to the tutoring portal</NavLink>
            </div>]
        );
    }
}
