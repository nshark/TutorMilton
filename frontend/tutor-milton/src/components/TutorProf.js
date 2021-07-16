import React, { Component } from 'react';
import Frees from './Frees'
import Subjects from './Subjects'
import Tutoring from './Tutoring'
import AddSub from './AddSub'
import { useState } from 'react'

import './profcomps.css'

function TutorProf() {
    

        const [showAddSub2, setShowAddSub] = useState (false)

        const [subject, setSubject] = useState([])

        const addSub = (subject) => {
            const id = Math.floor(Math.random() * 10000 ) +1
            const newSub = { id, ...subject }
            setSubject([...Subjects, newSub])
        }

        return (
         
            <div className="App-bg">
                   

                   <div class="row">

                    <div class="column">
                        <Tutoring />
                    </div>
             
                    <div class="column">
                        {showAddSub2 && <AddSub onAddSub={AddSub}/>}
                        <Subjects onAddSub = {()=>setShowAddSub(!showAddSub2)} showAddSub={showAddSub2}/>
                        
                        <Frees />
                    </div>
            
                </div>    
            </div>
           
        );
    }
export default TutorProf