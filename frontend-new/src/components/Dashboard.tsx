import {auth} from "../config/firebase-config.ts";
import {MouseEvent, useState} from "react";
import Header from "./Header.tsx";

function Dashboard() {
    const [info] = useState([]);
    async function signOut(e:MouseEvent) {

        e.preventDefault()

        if(window.confirm("Are you sure you want to sign out?")){
            await auth.signOut().then(function() {
                console.log("Successfully signed out.")

            }).catch(function(error) {
                console.log(error)
                console.log("An error occurred")
            });
        }

        else{
            return
        }


    }
    return (<span><Header/>
                <h1>Welcome {auth.currentUser.displayName}</h1>
                <img
                    alt="profile picture"
                    src={auth.currentUser.photoURL}
                    className="prof-img"
                />
                <br/>
                <div className="signout-Div">
                <button className="conf-button" onClick={signOut}>Sign Out!</button>
                </div>
                <div className="dashboard">

       <div className="dashboard__container">
       <p className="credits">Made by Noah Sitkoff, Gunner Peterson, Peter Perry, Sebastian Park, and Victoria Cheng</p>
     <div className="App">

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
function Frame(course: string, name:string , age:string) {
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
export default Dashboard