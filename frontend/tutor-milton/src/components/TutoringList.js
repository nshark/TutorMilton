import { FaTimes } from 'react-icons/fa'
import React from 'react';

const TutoringList = ({ tutees, frees, subject, teacher }) => {
    

    return(
        <div>

            {tutees.map((tut) => ( //This will need to become formatted in the ListComponent format. Mirror what was done for FreeList and SubjectList
            <div className="inner-container">
                
                    <h2 className="top-text">{tut.name} <input type="checkbox" id={tut.id} className="tutor-Button"/> </h2>
                    <h2 className="bottom-text">{tut.time}</h2>
             </div>
        ))}
        </div>
    )
}

TutoringList.defaultProps = {
    "tutees": [
        {
          "id": 1,
          "name": "John Doe",
          "time": "Wednesday, 3:00 PM"
        },
        {
          "id": 2,
          "name": "Mary Sue",
          "time": "Monday, 9:30 AM"
        },
        {
          "id": 3,
          "name": "Other Name",
          "time": "Friday, 5:00 PM"
        }
      ],
};

export default TutoringList