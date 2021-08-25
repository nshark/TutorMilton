import React, { Component } from 'react';
import Frees from './Frees'
import Subjects from './Subjects'
import Sessions from './Sessions'
import AddFree from './AddFree'
import { useState } from 'react'
import './profcomps.css'

function TuteeProfile() { //This needs to be "serverified"

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
    

    const [showAddFree2, setShowAddFree] = useState (false)

    const [free, setFree] = useState([])
    

    const addFree = (free) => {
        console.log(free)
    }
        return (
         
            <div className="App-bg">
                   

                   <div class="row">

                    <div class="column">
                        <Sessions />
                    </div>
             
                    <div class="column">

                    {showAddFree2 && <AddFree onAddFree={addFree}/>}
                    <Frees free={frees} onAddFree = {()=>setShowAddFree(!showAddFree2)} showAddFree={showAddFree2}/>
                        
                    </div>
            
                </div>    
            </div>
           
        );
    }

    export default TuteeProfile