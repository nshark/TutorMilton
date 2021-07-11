import React, { Component } from 'react';
import Header from './Header';

export default class LandingPage extends Component {
    render() {
        return (
            [<Header loggedIn={false} />,
            <div className="App-bg">
                <h1 className="main-title">Welcome.</h1>
                <div className="welcome-subtitle">Take me to the tutoring portal</div>
            </div>]
        );
    }
}
