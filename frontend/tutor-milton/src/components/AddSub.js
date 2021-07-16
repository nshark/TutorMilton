import {useState} from 'react'
import './Header.css'

function AddSub({onAddSub}) {
    const [subject, setSubject] = useState('')
    

    const onSubmit = (e) => {
        e.preventDefault()

        if(!subject){
            alert('Please add a subject')
            return
        }

        onAddSub({subject})

        setSubject('')
    }
    return(
        <div className="prof-container">
        <form className='prof-comp' onSubmit={onSubmit}>
            <div className='form-control'>
            <span className="top-bar-title-tutor">Add Subject <br/></span>
                <input type='text' placeholder='Add Subject' value={subject} onChange={(e)=>
                setSubject(e.target.value)} />
                <input type='submit' className = 'nav-element nav-button' value='Add Subject'/>
            </div>
            
        </form>
        </div>
    )
}

export default AddSub