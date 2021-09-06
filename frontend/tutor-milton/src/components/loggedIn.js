import React, { Component } from "react"
import firebase from "../config/firebase-config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './Header.css'

class LoggedIn extends Component {
    render() {
        return(
            <span>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <img
                    alt="profile picture"
                    src={firebase.auth().currentUser.photoURL}
                    className="prof-img"
                />
                <br/>
                <div className="signout-Div">
                <button className="conf-button" onClick={() => firebase.auth().signOut}>Sign Out!</button>
                </div>
            </span>
            )
    }
}

export default LoggedIn