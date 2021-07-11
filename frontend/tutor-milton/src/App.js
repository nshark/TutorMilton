import React, { useState } from "react";
import { Component } from "react";
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from './components/googleLogin';
import LandingPage from './components/LandingPage'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App

