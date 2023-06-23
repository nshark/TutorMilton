import React, { useState } from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from './components/loginButton';
import Dashboard from "./components/loggedIn";
import LandingPage from './components/LandingPage';
import Error from './components/Error';
import Header from './components/Header';
import TuteeProfile from './components/TuteeProfile';
import TutorProfile from './components/TutorProf';
import GoogleLogin from './components/googleLogin';
import TutorRequest from './components/TutorRequest';
import PairingPage from './components/PairingPage';
import RegisterPage from './components/RegisterPage';
import Modal from 'react-modal';
import { auth } from "./config/firebase-config"
import LoginButton from './components/loginButton'
import './App.css'

Modal.setAppElement('#root');

class App extends Component {
    state = { isSignedIn: false }


    componentDidMount = () => {
        auth.onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
    render() {
        return (
            <div className="App-bg">

                <BrowserRouter>
                    <Header />
                    {this.state.isSignedIn ? (



                        <div>


                            <Switch>
                                <Route exact path="/" component={Dashboard}/>
                                <Route path="/tutorprofile" component={TutorProfile} exact/>
                                <Route path="/tuteeprofile" component={TuteeProfile} exact/>
                                <Route path="/signin" component={GoogleLogin}/>
                                <Route path="/tutorrequests" component={TutorRequest}/>
                                <Route path="/pairing/:course/:id"> <PairingPage /> </Route>
                                <Route path="/register/:course/:id"> <RegisterPage /> </Route>
                                <Route path="*" component={Error}/>
                            </Switch>
                        </div>




                    ) : (


                        <Route path="*" component={LandingPage} exact/>


                    )}
                </BrowserRouter>
            </div>

        )
    }
}

export default App

