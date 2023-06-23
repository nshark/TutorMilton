import React, {useState} from "react";
import Modal from "react-modal";
import { auth, db, logout } from "../config/firebase-config";
import {firebase} from "../config/firebase-config"
import Datetime from 'react-datetime';
import TutoringList from './TutoringList'
import "./profcomps.css"
import "./react-datetime.css";

const TutorsModal = ({ isOpen, onClose, onEventAdded, frees, subject,  teacher, tutors}) => {

// export default function ({isOpen, onClose, onEventAdded, frees, subject,  teacher}) {






    const onSubmit = (event) => {



        event.preventDefault();
        console.log(frees)
        console.log(subject)
        console.log(teacher)
        if(window.confirm("Confirm Pairings?")){

            onClose();
        }
        else{
            return
        }

    }



    return(

        <Modal className="modal" isOpen={isOpen} onRequestClose={onClose} >

            <div className="App-bg">
                <div className="Row">


                    <div className="tutor-background-Form">


                        <p>Choose Your Tutors {subject}</p>
                        <TutoringList tutees = {tutors}/>

                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default TutorsModal