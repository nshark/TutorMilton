import {auth} from "../config/firebase-config.ts";
import {JSX, MouseEvent, useState} from "react";
import Admin_Header from "./Admin_Header.tsx";
import TutorTable from "./tutorTable.tsx";
import TuteeTable from "./tuteeTable.tsx";
function Admin_Dashboard() {
    const [info] = useState([]);
    const [menus] = useState(new Map<string, JSX.Element>());
    menus.set("tutors", TutorTable());
    menus.set("tutee", TuteeTable());
    const [selectedMenu, setSelectedMenu] = useState("tutors")
    async function signOut(e: MouseEvent) {

        e.preventDefault()

        if (window.confirm("Are you sure you want to sign out?")) {
            await auth.signOut().then(function () {
                console.log("Successfully signed out.")

            }).catch(function (error) {
                console.log(error)
                console.log("An error occurred")
            });
        } else {
            return
        }


    }

    return (<span><div><Admin_Header/></div>
                <h1>Welcome Admin {auth.currentUser.displayName}</h1>
                <img
                    alt="profile picture"
                    src={auth.currentUser.photoURL}
                    className="prof-img"
                />
                <br/>
                <div className="signout-Div">
                    <button className="conf-button" onClick={signOut}>Sign Out!</button>
                    <select className="dropbtn" onChange={(e) => {setSelectedMenu(e.target.value)}}>
                        <option value="tutors">Tutor Data</option>
                        <option value="tutee">All tutee requests</option>
                    </select>
                </div>
                <div className="dashboard">

       <div className="dashboard__container">{menus.get(selectedMenu)}<div className="App">

         {
             info.map((data) => {
                 return (
                     Frame(data.email, data.displayName, data.gradYear)
                 );
             })
         }

     </div>
    </div>
  </div>
    </span>
    );

}

function Frame(course: string, name: string, age: string) {
    console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">

                <p>NAME : {name}</p>


                <p>Age : {age}</p>


                <p>Course : {course}</p>

            </div>
        </center>
    )
}

export default Admin_Dashboard