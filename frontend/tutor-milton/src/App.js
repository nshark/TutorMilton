import React, { useState } from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from './components/googleLogin';
import LandingPage from './components/LandingPage';
import Error from './components/Error';
import Header from './components/Header';
import TuteeProfile from './components/TuteeProfile';
import GoogleLogin from './components/googleLogin';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={LandingPage} exact/>
             <Route path="/profile" component={TuteeProfile} exact/>
             <Route path="/login" component={GoogleLogin}/>
             <Route path="*" component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  )
}

export default App

