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
import ReqModal from "./ReqModal";
import React from 'react';
import './profcomps.css'
import Modal from "react-modal";

function PairingPage() {

    var { course, id } = useParams();

    course = decodeURIComponent(course)

    const [modalOpen, setModalOpen] = useState(false);

    const [userName, setUserName] = useState('')
    const [comment, setComment] = useState('')


    var email = 'none'
    
    function checkDocs(doc){
        console.log(doc.id, id)
        
        if(doc.id == id){
            setUserName(doc.data().displayName);
            email = doc.data().email;

        }
        else{
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
            email: email,
            comment: comment,
            uid: id,
        });} catch(e){
            console.log(e)
        }
        
        setModalOpen(true)
    }

    function cancelPush(){
        setModalOpen(true)
    }
   

    return(
        <div className="App-bg">
            <p class = "prof-comp">Confirm Pairing with {userName} for class: <br/> {course} ?
            <div>
            <input placeholder="Enter Comment" className="txt-Box2" value={comment} onChange={(e)=> setComment(e.target.value)}/>
            </div>
            <div>
            <button className="can-button" onClick={cancelPush}>Cancel</button>
            <button className="conf-button" onClick={pushTutor}> Confirm</button>
            </div>

            <ReqModal isOpen={modalOpen}/>
            </p>
        </div>
    );
}
export default PairingPage