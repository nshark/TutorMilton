import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import { auth, db, logout } from "../config/firebase-config";
import {firebase} from "../config/firebase-config"
import { useState } from 'react'

import React from 'react';
import './profcomps.css'

function PairingPage() {

    var { course, id } = useParams();

    const [userName, setUserName] = useState('')

    function checkDocs(doc){
        console.log(doc.id, id)
        
        if(doc.id == id){
            setUserName(doc.data().displayName);
            console.log(userName)
            console.log("YES")
        }
        else{
            console.log('nope')
        }
    }

    db.collection('users').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            checkDocs(doc)
        })
    })

    
    function pushTutor(){
        
        try { console.log('course', course);
        db.collection("tutors").add({
            available: true,
            displayName: userName,
            subjectsToTutor: course,
            uid: id,
        });} catch(e){
            console.log(e)
        }
    }
   

    return(
        <div className="App-bg">
            <p class = "prof-comp">Confirm Pairing with {userName}?
            <div>
            <button className="can-button">Cancel</button>
            <button className="conf-button" onClick={pushTutor}> Confirm</button>
            </div>
            </p>
        </div>
    );
}
export default PairingPage