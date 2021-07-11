import React, { Component } from 'react';
import Header from './Header';

export default class LandingPage extends Component {
    render() {
        return (
            [<Header loggedIn={false} />,
            <div className="App-bg">
                <h1 className="main-title">Welcome.</h1>
                <div className="welcome-subtitle">Take me to the tutoring portal</div>
                {/* {<img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Reac
      </a>} */}
            </div>]
        );
    }
}
