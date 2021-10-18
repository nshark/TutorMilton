import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react';
import { auth, db, logout } from "../config/firebase-config";
import {firebase} from "../config/firebase-config"

const TutoringList = ({ tutees, frees, subject, teacher }) => {
    
    function getVals() {
        const checkboxes = document.querySelectorAll(`input[name="${'check'}"]:checked`);
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        return values;
    }


    const onSubmit = (event) => {
        event.preventDefault();
        console.log('what i want',frees)
        console.log(subject)
        console.log(teacher)
        console.log(tutees)

        var checks = document.getElementsByClassName("check")


        for (const x in getVals()){
            console.log('hi',getVals()[x])
        }

        console.log('checks', checks)
        if(window.confirm("Confirm Pairings?")){
            console.log('tutors'+ tutees)
        }
        else{
            return
        }
        
    }

    const onClick = () => {
        // setTutors( arr => [ ...arr, `${arr.length}` ]);
    };

    return(
        <form onSubmit={onSubmit}>

            {tutees.map((tut) => ( 
            <div className="inner-container">
                
                    <h2 className="top-text">{tut.name} <input type="checkbox" name="check" value={tut.id} onChange={onClick} className="tutor-Button"/> </h2>
                    <h2 className="bottom-text">{tut.class}</h2>
                    <h2 className="bottom-text">{tut.email}</h2>
             </div>
        ))}
        <input type="submit" className="conf-button" value="Let's Go!"></input>
        </form>
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