import {useEffect, useState} from "react";
import {auth, firebase} from "../config/firebase-config.ts";
import User = firebase.User;
import Dashboard from "./Dashboard.tsx";
import LoginButton from "./loginButton.tsx"
export default function GoogleLogin(){
const [state, setState] = useState(false);
useEffect(auth.onAuthStateChanged((user: User) => {
    setState(Boolean(user).valueOf());}),[])
    return(<div className="App-bg">
        {state ? (

                <Dashboard />

            ) : (

                <LoginButton />

            )}

</div>)
}