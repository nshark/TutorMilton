import React, {useState} from "react";
import Modal from "react-modal";
import { auth, db, logout } from "../config/firebase-config";
import {firebase} from "../config/firebase-config"
import Datetime from 'react-datetime';
import TutoringList from './TutoringList'
import "./profcomps.css"
import "./react-datetime.css";

const ReqModal = ({ isOpen, onClose, onEventAdded, frees, subject,  teacher, tutors}) => {

  // export default function ({isOpen, onClose, onEventAdded, frees, subject,  teacher}) {
      return(
          
          <Modal className="modal" isOpen={isOpen} >
          
          <div className="App-bg">
              <div className="Row">
                  You may close this page.
              </div>
              </div>
          </Modal>
      )
  }
  
  export default ReqModal