import React, { Component } from 'react';
import Frees from './Frees'
import Subjects from './Subjects'
import Tutoring from './Tutoring'
import AddSub from './AddSub'
import AddFree from './AddFree'
import SubjectList from './SubjectList'
import { useState } from 'react'

import './profcomps.css'

function TutorProf() {

    const [subjects, setSubjects] = useState([
        {
            id: 1,
            subject: "Math"
        },
        {
            id: 2,
            subject: "English"
        },
        {
            id: 3,
            subject: "Biology"
        },
    ])

    const [frees, setFrees] = useState([
        {
            id: 1,
            free: "Wednesday 1st"
        },
        {
            id: 2,
            free: "Friday 3rd"
        },
        {
            id: 3,
            free: "Thursday 2nd"
        },
    ])
    

    const [showAddSub2, setShowAddSub] = useState (false)
    const [showAddFree2, setShowAddFree] = useState (false)

    const [subject, setSubject] = useState([])
    const [free, setFree] = useState([])
    


    const addSub = (subject) => {
        console.log(subject)
    }

    const addFree = (free) => {
        console.log(free)
    }

        return (
         
            <div className="App-bg">
                   
                   <div class="row">

                    <div class="column">
                        <Tutoring />
                    </div>
             
                    <div class="column">
                   
                        {showAddSub2 && <AddSub onAddSub={addSub}/>}
                        {showAddFree2 && <AddFree onAddFree={addFree}/>}

                        <Subjects subject={subjects} onAddSub = {()=>setShowAddSub(!showAddSub2)} showAddSub={showAddSub2}/>
                        <Frees free={frees} onAddFree = {()=>setShowAddFree(!showAddFree2)} showAddFree={showAddFree2}/>

                    </div>
            
                </div>    
            </div>
           
        );
    }
export default TutorProf