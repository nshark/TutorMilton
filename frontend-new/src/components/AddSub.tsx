import {FormEvent, useState} from 'react'
import './Header.css'

function AddSub({onAddSub}: { onAddSub: (subject: JSON) => void }) {
    const [subjectText, setSubjectText] = useState('')


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!subjectText) {
            alert('Please add a subject')
            return
        }

        onAddSub(JSON.parse(subjectText))

        setSubjectText('')
    }

    return (
        <div className="prof-container">
            <form className='prof-comp' onSubmit={onSubmit}>
                <div className='form-control'>
                    <span className="top-bar-title-tutor">Add Subject <br/></span>
                    <input type='text' placeholder='Add Subject' value={subjectText} onChange={(e) =>
                        setSubjectText(e.target.value)}/>
                    <input type='submit' className='nav-element nav-button' value='Add Subject'/>
                </div>

            </form>
        </div>
    )
}

export default AddSub