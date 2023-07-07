import {FormEvent, useState} from 'react'
import './Header.css'

function AddFree({onAddFree} : {onAddFree: (free:JSON) => void}) {

    const [freeText, setFreeText] = useState('')


    const onSubmitF = (e:FormEvent) => {
        e.preventDefault()

        if(!freeText){
            alert('Please add a free')
            return
        }

        onAddFree(JSON.parse(freeText))

        setFreeText('')
    }

    return(
        <div className="prof-container">
            <form className='prof-comp' onSubmit={onSubmitF}>
                <div className='form-control'>
                    <span className="top-bar-title-tutor">Add Free <br/></span>
                    <input type='text' placeholder='Add Free' value={freeText} onChange={(e)=>
                        setFreeText(e.target.value)} />
                    <input type='submit' className = 'nav-element nav-button' value='Add Free'/>
                </div>

            </form>
        </div>
    )
}

export default AddFree