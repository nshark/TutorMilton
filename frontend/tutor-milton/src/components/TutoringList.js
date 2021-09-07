import { FaTimes } from 'react-icons/fa'
import React from 'react';

const TutoringList = ({ tutees }) => {
    

    return(
        <div>
            {tutees.map((tut) => ( //This will need to become formatted in the ListComponent format. Mirror what was done for FreeList and SubjectList
            <div className="inner-container"> 
                <h2 className="top-text">{tut.name}, {tut.class}</h2>
                <h2 className="bottom-text">{tut.time}</h2>  
             </div>
        ))}
        </div>
    )
}

export default TutoringList