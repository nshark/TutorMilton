import {useEffect, useState} from "react";
import { auth } from "./config/firebase-config";
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
//TODO Track down the types of the various database calls and type them properly
function App() {
  const [state, setState] = useState(false);
    useEffect(auth.onAuthStateChanged((user) => {
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
                            <Route path="/pairing/:course/:id" element={<PairingPage/>}/>
                            <Route path="/register/:course/:id" element={ <RegisterPage />} />
                        </Routes>


                  </div>




              ) : (

                <Routes>
                  <Route path="/" element={<LandingPage />} />
                    <Route path="/pairing/:course/:id" element={<PairingPage/>}/>
                    <Route path="/register/:course/:id" element={ <RegisterPage />} />
                </Routes>

              )}
              <Routes>
              <Route path="/pairing/:course/:id" element={<PairingPage/>}/>
              <Route path="/register/:course/:id" element={ <RegisterPage />} />
              </Routes>
          </BrowserRouter>
      </div>

  );
}

export default App;
