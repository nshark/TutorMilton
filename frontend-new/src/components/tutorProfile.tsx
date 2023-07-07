import {useEffect, useState} from "react";
import Tutoring from './tutoring.tsx'
import AvailabilitySwitch from "./avaibilitySwitch.tsx";
import DormChoice from "./dormChoice.tsx";
import AddSub from "./AddSub.tsx";
import AddFree from "./AddFree.tsx";
import Subjects from "./subjects.tsx";
import Frees from "./Frees.tsx"
//TODO MAKE SURE THAT THE LOCALHOST ARE CHANGED TO tutormilton.com BEFORE RELEASE!
export default function TutorProfile(){
    const [subjects, setSubjects] = useState([])
    const [frees, setFrees] = useState([])
    const [tutees, setTutees] = useState([])


    const [showAddSub2, setShowAddSub] = useState (false)
    const [showAddFree2, setShowAddFree] = useState (false)
    useEffect(() => {

        const getSubjects = async () => {
            const res = await fetch('http://localhost:5000/subjects') //Currently fetches from a local database that must be changed
            const data = await res.json()
            setSubjects(data)
        }

        const getFrees = async () => {
            const res = await fetch('http://localhost:5000/frees')
            const data2 = await res.json()
            setFrees(data2)
        }

        const getTutees = async () => {
            const res = await fetch('http://localhost:5000/tutees')
            const data3 = await res.json()
            setTutees(data3)
        }

        getSubjects()
        getTutees()
        getFrees()


    }, [])
    const addSub = async (subject:JSON) => {
        const res = await fetch('http://localhost:5000/subjects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(subject)
        })

        const data  = await res.json()

        setSubjects([...subjects, data])

    }
    const addFree = async (free:JSON) => {
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

            <div className="row">

                <div className="column">
                    <Tutoring tutee = {tutees}/>
                    <DormChoice />
                    <AvailabilitySwitch />
                </div>

                <div className="column">

                    {showAddSub2 && <AddSub onAddSub={addSub}/>}
                    {showAddFree2 && <AddFree onAddFree={addFree}/>}

                    <Subjects subject={subjects} onAddSub = {()=>setShowAddSub(!showAddSub2)} showSub={showAddSub2}/>
                    <Frees free={frees} onAddFree = {()=>setShowAddFree(!showAddFree2)} showFree={showAddFree2}/>

                </div>

            </div>
        </div>

    );
}
