import React, { Component } from "react"
import firebase from "../config/firebase-config"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import './Header.css'

class LoggedIn extends Component {

    async signOut(e) {

        e.preventDefault()

        if(window.confirm("Are you sure you want to sign out?")){
            await firebase.auth().signOut().then(function() {
                console.log("Successfully signed out.")
          
              }).catch(function(error) {
                console.log(error)
                console.log("An error occurred")
              });
        }

        else{
            return
        }
    
      }

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
                <button className="conf-button" onClick={this.signOut}>Sign Out!</button>
                </div>
            </span>
            )
    }
}

export default LoggedIn