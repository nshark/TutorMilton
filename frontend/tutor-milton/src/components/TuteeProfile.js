import React, { Component, useEffect  } from 'react';

import Frees from './Frees'
import Subjects from './Subjects'
import Sessions from './Sessions'
import AddFree from './AddFree'
import { useState } from 'react'
import './profcomps.css'

function TuteeProfile() { //This needs to be "serverified"

    const [frees, setFrees] = useState([])
    const [sessions, setSessions] = useState([])
    

    const [showAddFree2, setShowAddFree] = useState (false)

    const [free, setFree] = useState([])
    const [session, setSession] = useState([])
    
    useEffect(() => {
        

        const getFrees = async () => {
            const res = await fetch('http://localhost:5000/frees')
            const data = await res.json()
            setFrees(data)
        }
        const getSessions = async () => {
            const res = await fetch('http://localhost:5000/sessions')
            const data2 = await res.json()
            setSessions(data2)
        }


        getFrees()
        getSessions()
    

    }, [])

    const addFree = async (free) => {
        const res = await fetch('http://localhost:5000/frees', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(free)
    })

    const data  = await res.json()

    setFrees([...frees, data])
    }


        return (
         
            <div className="App-bg">
                   

                   <div class="row">

                    <div class="column">
                        <Sessions session = { sessions }/>
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