import {useEffect, useState} from "react";
import { auth, firebase } from "./config/firebase-config";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard.tsx";
import LandingPage from "./components/LandingPage.tsx"
import User = firebase.User;
import GoogleLogin from './components/googleLogin.tsx';
import TutorRequest from './components/tutorRequest.tsx'
import PairingPage from './components/pairingPage.tsx'
import RegisterPage from './components/registerPage.tsx'
import TutorProfile from './components/tutorProfile.tsx';
function App() {
  const [state, setState] = useState(false);
    useEffect(auth.onAuthStateChanged((user: User) => {
        setState(Boolean(user).valueOf());}),[])
  return (<div className="App-bg">

          <BrowserRouter>
              {state ? (



                  <div>


                        <Routes>
                            <Route path="/" element={<Dashboard />}/>
                            <Route path="/signin" element={<GoogleLogin/>}/>
                            <Route path="/tutorprofile" element={<TutorProfile/>}/>
                            <Route path="/tuteeprofile" element={<TuteeProfile/>}/>
                            <Route path="/tutorrequests" element={<TutorRequest/>}/>
                            <Route path="/pairing/:course/:id"> <PairingPage /> </Route>
                            <Route path="/register/:course/:id"> <RegisterPage /> </Route>
                        </Routes>


                  </div>




              ) : (


                  <Route path="*" element={<LandingPage />} />


              )}
          </BrowserRouter>
      </div>

  );
}

export default App;
