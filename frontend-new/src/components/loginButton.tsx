import {auth} from "../config/firebase-config.ts"
import StyledFirebaseAuth from "./StyledFirebaseAuth"
import {auth as auth2} from "firebaseui";
import {GoogleAuthProvider} from "firebase/auth";

export default function loginButton(){
    const uiConfig:auth2.Config = {
        signInFlow: "popup",
        signInOptions: [
            GoogleAuthProvider.PROVIDER_ID,
        ]
    }
    return(
    <div className="container">
        <StyledFirebaseAuth className="sign-in-button"
                            uiConfig={uiConfig}
                            firebaseAuth={auth}
        />
    </div>
    );
}