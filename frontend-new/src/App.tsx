import {useEffect, useState} from "react";
import {auth, db} from "./config/firebase-config";
import {doc, setDoc} from "firebase/firestore";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import LandingPage from "./components/LandingPage.tsx"
import "./App.css"
import GoogleLogin from './components/googleLogin.tsx';
import TutorRequest from './components/tutorRequest.tsx'
import PairingPage from './components/pairingPage.tsx'
import RegisterPage from './components/registerPage.tsx'
import TutorProfile from './components/tutorProfile.tsx';
import TuteeProfile from './components/tuteeProfile.tsx'
import Admin_Dashboard from "./components/Admin_Dashboard.tsx";

//TODO Track down the types of the various database calls and type them properly
function App() {
    async function saveUser() {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
            name: auth.currentUser.displayName,
            email: auth.currentUser.email
        });
    }

    const [state, setState] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(auth.onAuthStateChanged((user) => {
        setState(Boolean(user).valueOf())
        //TODO Replace with some check to database for admin users
        if (state) {
            saveUser();
        }
        setIsAdmin(user.displayName == "Noah Sitkoff" || user.displayName == "Lainey Sloman")
    }), [])
    return (<div className="App-bg">
            <BrowserRouter>
                {state ? (


                    <div>


                        <Routes>
                            {isAdmin ?
                                (<Route path="/" element={<Admin_Dashboard/>}/>) :
                                (<Route path="/" element={<Dashboard/>}/>)}
                            <Route path="/signin" element={<GoogleLogin/>}/>
                            <Route path="/tutorprofile" element={<TutorProfile/>}/>
                            <Route path="/tuteeprofile" element={<TuteeProfile/>}/>
                            <Route path="/tutorrequests" element={<TutorRequest/>}/>
                            <Route path="/pairing" element={<RegisterPage/>}/>
                            <Route path="/register" element={<PairingPage/>}/>
                        </Routes>


                    </div>


                ) : (

                    <Routes>
                        <Route path="/*" element={<LandingPage/>}/>
                    </Routes>

                )}
            </BrowserRouter>
        </div>

    );
}

export default App;
