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
import emailjs from "emailjs-com"

function RegisterPage() {

  var { course, id } = useParams();

  course = decodeURIComponent(course)

  const [modalOpen, setModalOpen] = useState(false);

  const [userName, setUserName] = useState('')


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

  function sendTuteeEmail(){

    var templateParams = {
        from_name: firebase.auth().currentUser.displayName,
        class_name: course,
        to_name: userName,
        to_email: email,
        
    }

    emailjs.send("service_jsnvh9j", "template_jqyyi2j", templateParams, "user_QdL21uWEOg0m5JaXOC1LF")
    .then((result) => {
        console.log(result.text);

    }, (error) => {
        console.log(error.text);
    });
}
  
  function pushTutor(){
      
      try { console.log('course', course);
      db.collection("matches").add({
          tutor: firebase.auth().currentUser.displayName,
          tutor_email: firebase.auth().currentUser.email,
          tutee: userName,
          tutee_email: email,
          subject: course,
      });} catch(e){
          console.log(e)
      }

      try { console.log('course', course);
      db.collection("tutees").add({
          name: userName,
          email: email,
          subject: course,
      });} catch(e){
          console.log(e)
      }
      
      sendTuteeEmail()
      setModalOpen(true)
  }

  function cancelPush(){
      setModalOpen(true)
  }
 


  return(
      <div className="App-bg">
          <p class = "prof-comp">Confirm Pairing with {userName} for class: <br/> {course} ?
         
          <div>
          <button className="can-button" onClick={cancelPush}>Cancel</button>
          <button className="conf-button" onClick={pushTutor}> Confirm</button>
          </div>

          <ReqModal isOpen={modalOpen}/>
          </p>
      </div>
  );
}
export default RegisterPage